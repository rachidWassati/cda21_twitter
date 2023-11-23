const {app} = require('../app');
const passport = require('passport');
const { findUserByEmail, findUserById, findUserByGoogleId } = require('../database/queries/user.queries');
const User = require('../database/models/user.model');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy
const env = require(`../environment/${process.env.NODE_ENV}`)

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await findUserById(id)
        done(null, user)
    } catch (error) {
        done(error)
    }
})

passport.use(
    'local', 
    new LocalStrategy(
        { usernameField: 'email' }, 
        async (email, password, done) => {
            try {
                const user = await findUserByEmail(email)
                if(user) {
                    const match = await user.comparePassword(password)
                    if(match) {
                        done(null, user)
                    } else {
                        done(null, false, { message: 'Wrong password' })
                    }
                } else {
                    done(null, false, {message: 'User not found'})
                }
            } catch (error) {
                done(error)
            }
        }
    )
)

passport.use('google', new GoogleStrategy({
    clientID: env.google.clientID,
    clientSecret: env.google.clientSecret,
    callbackURL: '/auth/google/cb'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await findUserByGoogleId(profile.id)
        if(user) {
            done(null, user)
        } else {
            const newUser = new User({
                username: profile.displayName.toLocaleLowerCase().replace(' ', '_'),
                firstname: profile.displayName.split(' ')[0],
                lastname: profile.displayName.split(' ')[1],
                local: {
                    googleId: profile.id,
                    email: profile.emails[0].value
                },
                image: profile.photos[0].value
            })
            const savedUser = await newUser.save()
            done(null, savedUser)
        }
    } catch (error) {
        done(error);
    }
}))