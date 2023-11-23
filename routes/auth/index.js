const router = require('express').Router();
const { signinForm, signin, signout, googleAuth, googleAuthCb } = require('../../controllers/auth.controller');
const { ensureAuthenticated } = require('../../middlewares/ensureAuthenticated');

router.get('/signin', signinForm);
router.post('/signin', signin);
router.get('/signout', ensureAuthenticated, signout);
router.get('/google', googleAuth)
router.get('/google/cb', googleAuthCb)


module.exports = router;