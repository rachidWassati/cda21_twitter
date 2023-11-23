const mongoose = require('mongoose')
const schema = mongoose.Schema;

const commentSchema = schema({
    content: {
        type: String, 
        maxlength: [140, 'Le commentaire est trop long'], 
        minlength: [1, 'Le commentaire est trop court'], 
        required: [true, 'Le commentaire ne peut etre vide']
    },
    author: {type: schema.Types.ObjectId, ref: 'user', required: true},
    tweet: {type: schema.Types.ObjectId, ref: 'tweet', required: true},
}, {
    timestamps: true
})

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;