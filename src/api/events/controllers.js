const { BadRequest } = require('../../utils/errors')
const response = require('../../utils/response')
const validate = require('../../utils/validate')
const EventValidations = require('./validations')
const EventService = require('../../services/events')

const createEvent = async (req, res, next) => {
    try {
        const params = validate(EventValidations.eventCreate, req.body)
        if(params instanceof Error) throw new BadRequest(params.message)
        const data = {
            title: params.title,
            startDate: params.startDate,
            endDate: params.endDate
        }
        let addedEvent = await EventService.createEvent(data)
        return response(res, 1, addedEvent, 200)
    } catch(error) {
        next(error)
    }
}

const getEvents = async (req, res, next) => {
    try {
        let allEvents = await EventService.getEvents()
        return response(res, 1, allEvents, 200)
    } catch(error) {
        next(error)
    }
}

const getEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id
        const oneEvent = await EventService.getEvent(eventId)
        return response(res, 1, oneEvent, 200)
    } catch(error) {
        next(error)
    }
}

const updateEvent = async (req, res, next) => {
    try {
        const params = validate(EventValidations.eventUpdate, req.body)
        if(params instanceof Error) throw new BadRequest(params.message)
        const eventId = req.params.id
        const data = {
            title: params.title,
            startDate: params.startDate,
            endDate: params.endDate
        }
        const updatedEvent = await EventService.updateEvent(eventId, data)
        return response(res, 1, updatedEvent, 200)
    } catch(error) {
        next(error)
    }
}

const deleteEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id
        const deletedEvent = await EventService.deleteEvent(eventId)
        return response(res, 1, deletedEvent, 200)
    } catch(error) {
        next(error)
    }
}

const EventControllers = {
    createEvent,
    getEvent,
    getEvents,
    updateEvent,
    deleteEvent
}

module.exports = EventControllers