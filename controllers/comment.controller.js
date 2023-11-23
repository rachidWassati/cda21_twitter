const { newComment } = require("../database/queries/comment.queries");


exports.createNewComment = async (req, res, next) => {
    try {
        const body = req.body;
        const tweetId = req.params.tweetId;
        const comment = await newComment(tweetId, {...body, author: req.user._id, tweet: tweetId})
        
        res.render('tweet/includes/comment-card', {comment})
    } catch (error) {
        next(error)
    }
}