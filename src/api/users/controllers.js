const { BadRequest } = require("../../utils/errors")
const response = require("../../utils/response")
const validate = require("../../utils/validate")
const UserValidations = require('./validations')
const UserService = require('../../services/users')

const userPost = async (req, res, next) => {
    try {
        const params = validate(UserValidations.users, req.body)
        if(params instanceof Error) throw new BadRequest(params.message)
        let bmi = params.weight / Math.pow(params.height, 2)
        const data = {
            name: params.name,
            email: params.email,
            mobileNumber: params.mobileNumber,
            weight: params.weight,
            height: params.height,
            bmi: bmi,
        }
        let addedUser = await UserService.createUser(data)
        return response(res, 1, addedUser, 200)
    } catch(error) {
        next(error)
    }
}

const usersGet = async (req, res, next) => {
    try {
      const allUsers = await UserService.getUsers()
      return response(res, 1, allUsers, 200)
    } catch(error) {
      next(error)
    }
}

const userGet = async (req, res, next) => {
    try {
      const userId = req.params.id
      const oneUser = await UserService.getUser(userId)
      return response(res, 1, oneUser, 200)
    } catch(error) {
      next(error)
    }
}

const userUpdate = async (req, res, next) => {
    try {
      const params = validate(UserValidations.users, req.body)
      if(params.weight !== null || params.height !== null) {
        let bmi = params.weight / Math.pow(params.height, 2)
        const data = {
            name: params.name,
            email: params.email,
            mobileNumber: params.mobileNumber,
            weight: params.weight,
            height: params.height,
            bmi: bmi,
        }
        const userId = req.params.id
        const updatedUser = await UserService.updateUser(userId, data)
        return response(res, 1, updatedUser, 200)
      } else {
        const data = {
            name: params.name,
            email: params.email,
            mobileNumber: params.mobileNumber,
        }
        const userId = req.params.id
        const updatedUser = await UserService.updateUser(userId, data)
        return response(res, 1, updatedUser, 200)
      }
    } catch(error) {
      next(error)
    }
}

const userDelete = async (req, res, next) => {
    try {
      const userId = req.params.id
      const deletedUser = await UserService.deleteUser(userId)
      return response(res, 1, deletedUser, 200)
    } catch(error) {
      next(error)
    }
}

const UserControllers = {
    userPost,
    userGet,
    usersGet,
    userUpdate,
    userDelete
}

module.exports = UserControllers