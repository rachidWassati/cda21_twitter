const router = require('express').Router();
const { signinForm, signin, signout } = require('../../controllers/auth.controller');

router.get('/signin', signinForm);
router.post('/signin', signin);
router.get('/signout', signout);


module.exports = router;