const { displayForm, createNewTweet, deleteTweet } = require('../../controllers/tweet.controller');
const router = require('express').Router()

router.get('/new', displayForm)
router.post('/new', createNewTweet)
router.delete('/:tweetId', deleteTweet)

module.exports = router;