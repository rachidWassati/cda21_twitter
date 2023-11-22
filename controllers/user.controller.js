const { createUser } = require("../database/queries/user.queries")

exports.signupForm = (req, res, next) => {
    try {
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

