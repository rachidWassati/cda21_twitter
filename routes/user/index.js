const { signupForm, signup, updateImageProfile } = require('../../controllers/user.controller');
const { ensureAuthenticated } = require('../../middlewares/ensureAuthenticated');

const router = require('express').Router()

router.get('/signup', signupForm)
router.post('/signup', signup)
router.post('/update/image', ensureAuthenticated, updateImageProfile)

module.exports = router;