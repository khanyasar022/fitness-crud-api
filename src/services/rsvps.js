const Rsvp = require('../models/rsvpSchema')

const createRsvp = async (data) => {
        const createdRsvp = await Rsvp.create(data)
        return createdRsvp
}

const getRsvp = async (userId, eventId) => {
        const allRsvp = await Rsvp.findOne({ userId: userId, eventId: eventId}).populate('eventId').populate('userId')
        return allRsvp
}

const RsvpServices = {
    createRsvp,
    getRsvp
}

module.exports = RsvpServices