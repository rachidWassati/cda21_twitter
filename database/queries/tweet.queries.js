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