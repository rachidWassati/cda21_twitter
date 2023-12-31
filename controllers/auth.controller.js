const passport = require("passport")

exports.signinForm = (req, res, next) => {
    res.render('auth/signin')
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

exports.signout = (req, res, next) => {
    req.logout((err) => {
        if(err) return next(err)
        res.redirect('/')
    })
}

exports.googleAuth = (req, res, next) => {
    passport.authenticate('google', {
        scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
    })(req, res, next)
}

exports.googleAuthCb = (req, res, next) => {
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/auth/signin'
    })(req, res, next)
}
