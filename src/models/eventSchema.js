const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title: {
        type: String
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
}, { timestamps: true })

const Event = new mongoose.model("Event", eventSchema)

module.exports = Event