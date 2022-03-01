const Rsvp = require('../models/rsvpSchema')

const createRsvp = async (data) => {
    try {
        const createdRsvp = await Rsvp.create(data)
        return createRsvp
    } catch(error) {
        console.log(`create rsvp error ${error}`)
    }
}

const getRsvp = async (userId, eventId) => {
    try {
        const allRsvp = await Rsvp.findOne({ userId: userId, eventId: eventId}).populate('eventId').populate('userId')
        return allRsvp
    } catch(error) {
        console.log(`get rsvp error ${error}`)
    }
}

const RsvpServices = {
    createRsvp,
    getRsvp
}

module.exports = RsvpServices