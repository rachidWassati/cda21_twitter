const router = require('express').Router()
const { showTweets } = require('../controllers/tweet.controller')
const tweetRoute = require('./tweet')
const userRoute = require('./user')
const authRoute = require('./auth')
const { ensureAuthenticated } = require('../middlewares/ensureAuthenticated')
const { totoController } = require('../controllers/toto')

router.use('/tweet', ensureAuthenticated, tweetRoute)
router.use('/user', userRoute)
router.use('/auth', authRoute)
router.get('/toto', totoController)
router.get('/', showTweets)



module.exports = router