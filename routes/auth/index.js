const router = require('express').Router();
const { signinForm, signin, signout } = require('../../controllers/auth.controller');
const { ensureAuthenticated } = require('../../middlewares/ensureAuthenticated');

router.get('/signin', signinForm);
router.post('/signin', signin);
router.get('/signout', ensureAuthenticated, signout);


module.exports = router;