
exports.signupForm = (req, res, next) => {
    try {
        res.render('auth/signup')
    } catch (error) {
        next(error)
    }
}

exports.signup = (req, res, next) => {
    try {
        res.end()
    } catch (error) {
        next(error)
    }
}

