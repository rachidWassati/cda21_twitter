const Comment = require("../models/comment.model");
const { findTweetById } = require("./tweet.queries")

exports.newComment = async (tweetId, body) => {
    const tweet = await findTweetById(tweetId);
    const newComment = new Comment(body);
    tweet.nbComments++
    tweet.save()
    return newComment.save().then(cId => cId.populate('author')).then(c => c)
}

exports.getAllCommentsByTweetId = (tweetId) => {
    return Comment.find({tweet: tweetId}).sort({createdAt: -1}).populate('author').populate('tweet').exec();
}