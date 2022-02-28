const express = require('express')
const router = express.Router()
const EventControllers = require('./controllers')

router.get('/', EventControllers.getEvents)

router.post('/', EventControllers.createEvent)

router.patch('/:id', EventControllers.updateEvent)

router.delete('/:id', EventControllers.deleteEvent)

router.get('/:id', EventControllers.getEvent)

module.exports = router