const Tweet = require("../models/tweet.model")
const User = require("../models/user.model")

exports.create = (body) => {
    const newTweet = new Tweet(body)
    return newTweet.save()
}

exports.findAll = async () => {
    return Tweet.find({}).sort({createdAt: -1}).populate('author').exec();
}

exports.getCurrentUserTweetsWithFollowings = (user) => {
    return Tweet.find({author: {$in : [...user.followings, user._id]}}).sort({createdAt: -1}).populate('author').exec()
}

exports.getUserTweetsFromUsername = async (username) => {
    const author = await User.findOne({username: username})
    const tweets = await Tweet.find({author: author._id}).sort({createdAt: -1}).populate('author')
    return [author, tweets]
}

exports.deleteById = (tweetId) => {
    return Tweet.findByIdAndDelete(tweetId).exec();
}

exports.findTweetById = (tweetId) => {
    return Tweet.findOne({ _id: tweetId }).populate('author').exec()
}

exports.findTweetAndUpdate = (tweetId, tweet) => {
    return Tweet.findByIdAndUpdate(tweetId, tweet , {runValidators: true}).exec()
}

exports.likeTweet = async (tweetId, user) => {
    const tweet = await Tweet.findOne({_id: tweetId});

    if(!user.likedTweets.includes(tweetId.toString())) {
        tweet.nbLikes++
        user.likedTweets.push(tweetId)
    } else {
        tweet.nbLikes--
        user.likedTweets = user.likedTweets.filter(tId => tId.toString() !== tweetId.toString())
    }
    user.save()
    tweet.save()
}