const Rsvp = require('../models/rsvpSchema')

const createRsvp = async (data) => {
    try {
        const createdRsvp = await Rsvp.create(data)
        return createRsvp
    } catch(error) {
        console.log(`create rsvp error ${error}`)
    }
}

const RsvpServices = {
    createRsvp
}

module.exports = RsvpServices