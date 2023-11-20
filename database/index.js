const mongoose = require('mongoose')

mongoose.connect(
    'mongodb://rachid:toto@127.0.0.1:27017/twitter'
).then(() => console.log("Connexion etablie !"))
.catch(err => console.log(err))