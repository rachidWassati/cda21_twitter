const { signupForm, signup, updateImageProfile, displayUserProfile, search, unfollowUser, followUser } = require('../../controllers/user.controller');
const { ensureAuthenticated } = require('../../middlewares/ensureAuthenticated');

const router = require('express').Router()

router.get('/', search)
router.get('/signup', signupForm)
router.post('/signup', signup)
router.post('/update/image', ensureAuthenticated, updateImageProfile)
router.get('/follow/:userid', followUser)
router.get('/unfollow/:userid', unfollowUser)
router.get('/:username', displayUserProfile)

module.exports = router;