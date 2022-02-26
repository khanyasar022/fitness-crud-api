const User = require('../models/userSchema')

const createUser = async (data) => {
    try {
        const addedUser = await User.create(data)
        return addedUser
    } catch(error) {
        console.log(`create user error ${error}`)
    }
}

const getUsers = async () => {
    try {
        const allUsers = await User.find({})
        return allUsers
    } catch(error) {
        console.log(`get all users error ${error}`)
    }
}

const getUser = async (userId) => {
    try {
        const oneUser = await User.findById(userId)
        return oneUser
    } catch(error) {
        console.log(`get user by userId error ${error}`)
    }
}

const updateUser = async (userId, data) => {
    try {

        const updatedUser = await User.findByIdAndUpdate(userId, data, { new: true })
        return updatedUser
    } catch(error) {
        console.log(`update user error ${error}`)
    }
}

const deleteUser = async (userId) => {
    try {

        const deletedUser = await User.findByIdAndDelete(userId)
        return deletedUser
    } catch(error) {
        console.log(`delete user error ${error}`)
    }
}

const UserService = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}

module.exports = UserService