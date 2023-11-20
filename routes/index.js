const router = require('express').Router()
const { showTweets } = require('../controllers/tweet.controller')
const tweetRoute = require('./tweet')

router.use('/tweet', tweetRoute)

router.get('/', showTweets)


module.exports = router