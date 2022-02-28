const mongoose = require('mongoose')

const rsvpSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    status: {
        type: String
    }
})

const RSVP = new mongoose.model('RSVP', rsvpSchema)

module.exports = RSVP