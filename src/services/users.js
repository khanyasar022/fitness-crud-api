const User = require('../models/userSchema')

const createUser = async (data) => {
        const addedUser = await User.create(data)
        return addedUser
}

const getUsers = async () => {
        const allUsers = await User.find({})
        return allUsers
}

const getUser = async (userId) => {
        const oneUser = await User.findById(userId)
        return oneUser
}

const updateUser = async (userId, data) => {
        const updatedUser = await User.findByIdAndUpdate(userId, data, { new: true })
        return updatedUser
}

const deleteUser = async (userId) => {
        const deletedUser = await User.findByIdAndDelete(userId)
        return deletedUser
}

const UserService = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}

module.exports = UserService