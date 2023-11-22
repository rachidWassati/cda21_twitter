const { createUser } = require("../database/queries/user.queries")
const multer = require('multer');
const path = require('path');

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '../public/images/avatars'))
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`)
        }
    })
})

exports.signupForm = (req, res, next) => {
    try {
        if(req.isAuthenticated()) res.redirect('/')
        res.render('auth/signup', {isAuthenticated: req.isAuthenticated(), currentUser: req.user})
    } catch (error) {
        next(error)
    }
}

exports.signup = async (req, res, next) => {
    const body = req.body
    try {
        const user = await createUser(body);
        res.redirect('/');
    } catch (error) {
        res.render('auth/signup', {isAuthenticated: req.isAuthenticated(), currentUser: req.user, errors: [error.message]})
    }
}

exports.updateImageProfile = [
    upload.single('image'),
    async (req, res, next) => {
        try {
            const user = req.user;
            user.image = `/images/avatars/${req.file.filename}`;
            await user.save();
            res.redirect('/')
        } catch (error) {
            next(error)
        }
    }
]