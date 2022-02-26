const joi = require("joi");

const users = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  mobileNumber: joi.number().required(),
  weight: joi.number().required(),
  height: joi.number().required()
})

const UserValidations = {
  users,
}
module.exports = UserValidations