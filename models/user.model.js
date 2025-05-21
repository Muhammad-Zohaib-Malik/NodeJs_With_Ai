import mongoose from "mongoose";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Middleware to hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await argon2.hash(this.password);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function (password) {
  try {
    return await argon2.verify(this.password, password);
  } catch (err) {
    throw new Error("Password comparison failed");
  }
};

userSchema.methods.generateAccessToken = function () {
  const payload = { id: this._id, email: this.email, role: this.role };
  const secret = process.env.JWT_SECRET;
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secret, options);
};

export const User = mongoose.model("User", userSchema);
