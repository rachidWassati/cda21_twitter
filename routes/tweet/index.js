const { displayForm, createNewTweet, deleteTweet, editTweet, updateTweet, like } = require('../../controllers/tweet.controller');
const router = require('express').Router()

router.get('/new', displayForm)
router.post('/new', createNewTweet)

router.delete('/:tweetId', deleteTweet)

router.get('/edit/:tweetId', editTweet)
router.post('/edit/:tweetId', updateTweet)

router.get('/like/:tweetId', like)

module.exports = router;