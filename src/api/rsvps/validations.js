const Joi = require('joi')

const rsvpCreate = Joi.object({
    eventId: Joi.string().required(),
    userId: Joi.string().required(),
    status: Joi.string().required()
})

const RsvpValidations = {
    rsvpCreate
}

module.exports = RsvpValidations