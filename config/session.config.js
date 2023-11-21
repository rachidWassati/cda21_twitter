const { app } = require('../app');
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
    secret: 'cle secrete',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 14
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://rachid:toto@127.0.0.1:27017/twitter',
        ttl: 60 * 60 * 24 * 14
    })
}))