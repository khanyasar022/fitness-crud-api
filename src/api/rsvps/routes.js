const express = require('express')
const router = express.Router()
const RsvpControllers = require('./controllers')

router.put('/', RsvpControllers.createRsvp)

router.get('/events/rsvpd/:userId', RsvpControllers.getRsvp)


module.exports = router