const { BadRequest } = require('../../utils/errors')
const response = require('../../utils/response')
const validate = require('../../utils/validate')
const RsvpServices = require('../../services/rsvps')
const RsvpValidations = require('./validations')
const Rsvp = require('../../models/rsvpSchema')
const { all } = require('./routes')

const createRsvp = async (req, res, next) => {
    try {
        const params = validate(RsvpValidations.rsvpCreate, req.body)
        if(params instanceof Error) throw new BadRequest(params.message)
        const alreadyExist = await Rsvp.findOne({eventId: params.eventId, userId: params.userId, status: params.status})
        if(alreadyExist) return response(res, 0, 'already exists', 400)
        const data = {
            eventId: params.eventId,
            userId: params.userId,
            status: params.status
        }
        const createdRsvp = RsvpServices.createRsvp(data)
        return response(res, 1, createRsvp, 200)
    } catch(error) {
        next(error)
    }
}

const getRsvp = async (req, res, next) => {
    try {
        const userId = req.params.userId
        const eventId = req.params.eventId
        const allRsvp = await RsvpServices.getRsvp(userId, eventId)
        return response(res, 1, allRsvp, 200)
    } catch(error) {
        next(error)
    }
}

const RsvpControllers = {
    createRsvp,
    getRsvp
}
module.exports = RsvpControllers