const joi = require("joi");

const users = joi.object({
  name: joi.string(),
  email: joi.string(),
  mobileNumber: joi.number(),
  weight: joi.number(),
  height: joi.number(),
})

const UserValidations = {
  users,
}
module.exports = UserValidations