const mongoose = require('mongoose')

const rsvpSchema = new mongoose.Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ["confirmed", "rejected"]
    }
}, { timestamps: true })

const Rsvp = new mongoose.model('Rsvp', rsvpSchema)

module.exports = Rsvp