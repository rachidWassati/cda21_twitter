const { displayForm, createNewTweet } = require('../../controllers/tweet.controller');
const router = require('express').Router()

router.get('/new', displayForm)
router.post('/new', createNewTweet)

module.exports = router;