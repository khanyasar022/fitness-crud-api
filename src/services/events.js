const Event =  require('../models/eventSchema')

const createEvent = async (data) => {
    try {
        const addedEvent = await Event.create(data)
        return addedEvent
    } catch(error) {
        console.log(`create event error ${error}`)
    }
}

const getEvents = async () => {
    try {
        const allEvents = await Event.find({})
        return allEvents
    } catch(error) {
        console.log(`get all events error ${error}`)
    }
}

const getEvent = async (eventId) => {
    try {
        const oneEvent = await Event.findById(eventId)
        return oneEvent
    } catch(error) {
        console.log(`get single event error ${error}`)
    }
}

const updateEvent = async (eventId, data) => {
    try {
        const updatedEvent =  await Event.findByIdAndUpdate(eventId, data, { new: true })
        return updatedEvent
    } catch(error) {
        console.log(`update event error ${error}`)
    }
}

const deleteEvent = async (eventId) => {
    try {
    const deletedEvent = await Event.findByIdAndDelete(eventId)
    return deleteEvent
    } catch {
    console.log(`delete event error ${error}`)
    }
}

const EventService = {
    createEvent,
    getEvents,
    getEvent,
    updateEvent,
    deleteEvent
}
module.exports = EventService