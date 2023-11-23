const { createNewComment } = require('../../controllers/comment.controller')

const router = require('express').Router()

router.post('/new/:tweetId', createNewComment)

module.exports = router