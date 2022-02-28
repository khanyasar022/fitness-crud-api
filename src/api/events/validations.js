const joi = require('joi')

const eventCreate = joi.object({
    title: joi.string().required(),
    startDate: joi.date().required(),
    endDate: joi.date().required()
})

const eventUpdate = joi.object({
    title: joi.string(),
    startDate: joi.date(),
    endDate: joi.date()
})

const EventValidations = {
    eventCreate,
    eventUpdate
}

module.exports = EventValidations