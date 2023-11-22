const { create, findAll, deleteById, findTweetById, findTweetAndUpdate, getCurrentUserTweetsWithFollowings } = require("../database/queries/tweet.queries");

/*        Controllers des Tweets                 */
exports.displayForm = (req, res) => {
    res.render('tweet/tweet-new', {isAuthenticated: req.isAuthenticated(), currentUser: req.user})
}

exports.showTweets = async (req, res) => {
    let tweets;
    if(req.user){
        tweets = await getCurrentUserTweetsWithFollowings(req.user)
    } else {
        tweets = await findAll()
    }
    res.render('tweet/tweet-list', {isAuthenticated: req.isAuthenticated(), currentUser: req.user, tweets});
}

exports.createNewTweet = async (req, res) => {
    try {
        await create({ ...req.body, author: req.user._id })
        res.redirect('/')
    } catch (error) {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message)
        res.status(400).render('tweet/tweet-new', {isAuthenticated: req.isAuthenticated(), currentUser: req.user, errors})
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

exports.editTweet = async (req, res, next) => {
    try {
        const tweetId = req.params.tweetId;
        const tweet = await findTweetById(tweetId);
        res.render('tweet/tweet-edit' , {tweet})
    } catch (error) {
        next(error)
    }
}

exports.updateTweet = async (req, res, next) => {
    const tweetId = req.params.tweetId;
    try {
        const body = req.body;
        await findTweetAndUpdate(tweetId, body)
        res.redirect('/')
    } catch (error) {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message)
        const tweet = await findTweetById(tweetId)
        res.status(400).render('tweet/tweet-edit', {isAuthenticated: req.isAuthenticated(), currentUser: req.user, tweet, errors })
    }
}
