const passport = require("passport")


exports.signinForm = async (req, res, next) => {
    try {
        res.render('auth/signin')
    } catch (error) {
        next(error)
    }
}

exports.signin = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err) {
            next(err)
        } else if(!user) {
            res.render('auth/signin', {errors: [info.message]})
        } else {
            req.login(user, err => {
                if(err) {
                    next(err)
                } else {
                    res.redirect('/')
                }
            })
        }
    })(req, res, next)
}

exports.signout = async (req, res, next) => {
    try {
        res.end()
    } catch (error) {
        next(error)
    }
}

