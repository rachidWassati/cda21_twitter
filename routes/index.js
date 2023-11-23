const router = require('express').Router()
const { showTweets } = require('../controllers/tweet.controller')
const tweetRoute = require('./tweet')
const userRoute = require('./user')
const authRoute = require('./auth')
const commentRoute = require('./comment')

const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated')

router.get('/', showTweets)
router.use('/auth', authRoute)
router.use('/user', userRoute)
router.use(ensureAuthenticated)
router.use('/tweet', tweetRoute)
router.use('/comment', commentRoute)

module.exports = router