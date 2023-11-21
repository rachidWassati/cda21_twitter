const Tweet = require("../models/tweet.model")

exports.create = (body) => {
    const newTweet = new Tweet(body)
    return newTweet.save()
}

exports.findAll = () => {
    return Tweet.find({}).exec();
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