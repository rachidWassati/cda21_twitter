const User = require("../database/models/user.model")


exports.totoController = async (req, res, next) => {
    const user = await User.findById('655ccc94c94255ad6ec9f7f9')
    res.json(user)
}