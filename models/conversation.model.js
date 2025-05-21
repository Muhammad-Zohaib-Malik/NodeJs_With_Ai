import mongoose from "mongoose";
const conversationSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    chat_bot_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatBot',
        required: true
    },
    last_message: {
        type: String,
        default:""
    }
}, { timestamps: true });

export const Conversation = mongoose.model('Conversation', conversationSchema);

