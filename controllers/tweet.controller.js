const Tweet = require("../database/models/tweet.model");
const { create, findAll, deleteById } = require("../database/queries/tweet.queries");


exports.displayForm = (req, res) => {
    res.render('tweet/tweet-form')
}

exports.showTweets = async (req, res) => {
    const tweets = await findAll()
    res.render('tweet/tweet-list', {tweets});
}

exports.createNewTweet = async (req, res) => {
    try {
        const body = req.body
        await create(body)
        res.redirect('/')
    } catch (error) {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message)
        res.status(400).render('tweet/tweet-form', {errors})
    }

}

exports.deleteTweet = async (req, res, next) => {
    try {
        const tweetId = req.params.tweetId;
        await deleteById(tweetId)
        res.end()
    } catch (error) {
        next(error)
    }
}