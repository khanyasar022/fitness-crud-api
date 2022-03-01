const { BadRequest } = require('../../utils/errors')
const response = require('../../utils/response')
const validate = require('../../utils/validate')
const RsvpServices = require('../../services/rsvps')
const RsvpValidations = require('./validations')
const Rsvp = require('../../models/rsvpSchema')

const createUpdateRsvp = async (req, res, next) => {
    try {
        const params = validate(RsvpValidations.rsvpCreate, req.body)
        if(params instanceof Error) throw new BadRequest(params.message)
        // const alreadyExist = await Rsvp.findOne({eventId: params.eventId, userId: params.userId, status: params.status})
        // if(alreadyExist) return response(res, 0, alreadyExist, 400)
        // const updateQuery = await Rsvp.findOne({eventId: params.eventId, userId: params.userId})
        // if(updateQuery) {
        //     const data = {
        //         eventId: params.eventId,
        //         userId: params.userId,
        //         status: params.status
        //     }
        //     const updatedRsvp = RsvpServices.updateRsvp(data)
        //     return response(res, 1, updatedRsvp, 200)
        // }
        const data = {
            eventId: params.eventId,
            userId: params.userId,
            status: params.status
        }
        const createdUpdatedRsvp = await RsvpServices.updateRsvp(data)
        return response(res, 1, createdUpdatedRsvp, 200)
    } catch(error) {
        next(error)
    }
}

const getRsvp = async (req, res, next) => {
    try {
        const userId = req.params.userId
        const allRsvp = await RsvpServices.getRsvp(userId)
        return response(res, 1, allRsvp, 200)
    } catch(error) {
        next(error)
    }
}

const RsvpControllers = {
    createUpdateRsvp,
    getRsvp
}
module.exports = RsvpControllers