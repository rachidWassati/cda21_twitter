const mongoose = require('mongoose')
const schema = mongoose.Schema

const tweetSchema = schema({
    content: {
        type: String, 
        maxlength: [140, 'Le tweet est trop long'], 
        minlength: [1, 'Le tweet est trop court'], 
        required: [true, 'Le tweet ne peut etre vide']}
}, {
    timestamps: true
})

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;