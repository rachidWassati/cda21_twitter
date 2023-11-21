const router = require('express').Router()
const { showTweets } = require('../controllers/tweet.controller')
const tweetRoute = require('./tweet')
const userRoute = require('./user')

router.use('/tweet', tweetRoute)
router.use('/user', userRoute)
router.get('/', showTweets)


module.exports = router