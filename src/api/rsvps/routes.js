const express = require('express')
const router = express.Router()
const RsvpControllers = require('./controllers')

router.post('/', RsvpControllers.createRsvp)


module.exports = router