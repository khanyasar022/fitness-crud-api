const Rsvp = require('../models/rsvpSchema')

const updateRsvp = async (data) => {
        const updatedRsvp = await Rsvp.findOneAndUpdate({userId: data.userId, eventId: data.eventId}, {$set: data}, {new: true, upsert: true})
        return updatedRsvp
}

const getRsvp = async (userId) => {
        const allRsvp = await Rsvp.find({ userId: userId, status: "confirmed"}).populate('eventId').populate('userId')
        return allRsvp
}

const RsvpServices = {
    updateRsvp,
    getRsvp
}

module.exports = RsvpServices