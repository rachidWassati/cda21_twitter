const mongoose = require('mongoose')
const env = require(`../environment/${process.env.NODE_ENV}`)

mongoose.connect(
    env.dbUrl
).then(() => console.log("✅ Connexion etablie !"))
.catch(err => console.log(err))