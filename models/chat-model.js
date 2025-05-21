import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    conversation_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Conversation'
    },
    chat_bot_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ChatBot'
    },
    user_message: {
        type: String,
        default: ""
    },
    ai_message: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});

export const Chat = mongoose.model('Chat', chatSchema);
