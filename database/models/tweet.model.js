const mongoose = require('mongoose')
const schema = mongoose.Schema

const tweetSchema = schema({
    content: {
        type: String, 
        maxlength: [140, 'Le tweet est trop long'], 
        minlength: [1, 'Le tweet est trop court'], 
        required: [true, 'Le tweet ne peut etre vide']
    },
    nbLikes: {type: Number, default: 0},
    nbComments: {type: Number, default: 0},
    nbShares: {type: Number, default: 0},
    author: {type: schema.Types.ObjectId, ref: 'user', required: true}
}, {
    timestamps: true
})

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;