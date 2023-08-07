import mongoose from "mongoose"


const postSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('tweet', postSchema);