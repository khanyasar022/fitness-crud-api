const Rsvp = require('../models/rsvpSchema')

const createRsvp = async (data) => {
        const createdRsvp = await Rsvp.create(data)
        return createdRsvp
}

const updateRsvp = async (data) => {
        const updatedRsvp = await Rsvp.findOneAndUpdate({userId: data.userId, eventId: data.eventId}, { new: true })
        return updatedRsvp
}

const getRsvp = async (userId, eventId) => {
        const allRsvp = await Rsvp.findOne({ userId: userId, eventId: eventId}).populate('eventId').populate('userId')
        return allRsvp
}

const RsvpServices = {
    createRsvp,
    updateRsvp,
    getRsvp
}

module.exports = RsvpServices