const joi = require("joi");

const userCreate = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  mobileNumber: joi.number().required(),
  weight: joi.number().required(),
  height: joi.number().required()
})

const userUpdate = joi.object({
  name: joi.string(),
  email: joi.string(),
  mobileNumber: joi.number(),
  weight: joi.number(),
  height: joi.number()
})

const UserValidations = {
  userCreate,
  userUpdate
}
module.exports = UserValidations