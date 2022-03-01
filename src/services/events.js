const Event =  require('../models/eventSchema')

const createEvent = async (data) => {
        const addedEvent = await Event.create(data)
        return addedEvent
}

const getEvents = async () => {
        const allEvents = await Event.find({})
        return allEvents
}

const getEvent = async (eventId) => {
        const oneEvent = await Event.findById(eventId)
        return oneEvent
}

const updateEvent = async (eventId, data) => {
        const updatedEvent =  await Event.findByIdAndUpdate(eventId, data, { new: true })
        return updatedEvent
}

const deleteEvent = async (eventId) => {
    const deletedEvent = await Event.findByIdAndDelete(eventId)
    return deletedEvent
}

const EventService = {
    createEvent,
    getEvents,
    getEvent,
    updateEvent,
    deleteEvent
}
module.exports = EventService