const Joi = require('joi')

const rsvpCreate = Joi.object({
    eventId: Joi.string(),
    userId: Joi.string(),
    status: Joi.string()
})

const RsvpValidations = {
    rsvpCreate
}

module.exports = RsvpValidations