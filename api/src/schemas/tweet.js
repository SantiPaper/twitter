const mongoose = require("mongoose");


const tweetSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("tweet", tweetSchema);