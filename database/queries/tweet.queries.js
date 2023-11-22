const Tweet = require("../models/tweet.model")
const User = require("../models/user.model")

exports.create = (body) => {
    const newTweet = new Tweet(body)
    return newTweet.save()
}

exports.findAll = async () => {
    return Tweet.find({}).populate('author').exec();
}

exports.getCurrentUserTweetsWithFollowings = (user) => {
    return Tweet.find({author: {$in : [...user.followings, user._id]}}).populate('author').exec()
}

exports.getUserTweetsFromUsername = (username) => {
    const author = User.find({username: username})
    return Tweet.find({author: author._id}).populate('author').exec()
}

exports.deleteById = (tweetId) => {
    return Tweet.findByIdAndDelete(tweetId).exec();
}

exports.findTweetById = (tweetId) => {
    return Tweet.findOne({ _id: tweetId }).exec()
}

exports.findTweetAndUpdate = (tweetId, tweet) => {
    return Tweet.findByIdAndUpdate(tweetId, tweet , {runValidators: true}).exec()
}