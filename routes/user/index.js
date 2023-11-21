const { signupForm, signup } = require('../../controllers/user.controller');

const router = require('express').Router()

router.get('/signup', signupForm)
router.post('/signup', signup)

module.exports = router;