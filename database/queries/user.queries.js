const User = require("../models/user.model")


exports.createUser = async (user) => {
    try {
        const hashedPassword = await User.hashPassword(user.password)
        const newUser = new User({
            username: user.username,
            local: {
                email: user.email,
                password: hashedPassword
            }
        })
        return newUser.save()
    } catch (error) {
        throw error
    }
}

exports.findUserByEmail = (email) => {
    return User.findOne({'local.email' : email}).exec()
}

exports.findUserById = (id) => {
    return User.findById(id).exec()
}

exports.searchUsersByRegex = (term) => {
    const regExp = `^${term}`;
    const reg = new RegExp(regExp);
    return User.find({username: {$regex: reg}}).exec()
}