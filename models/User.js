const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    created_at: {
        type: Date,
        default: Date.now
    },
    wallet: {
        type: String,
        default: null
    },
    balance: {
        type: Number,
        default: 0
    },
    total_ref: {
        type: Number,
        default: 0
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
