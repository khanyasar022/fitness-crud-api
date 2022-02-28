const express = require("express")
const cors = require('cors')
const cookieParser = require("cookie-parser")

const app = express()
const handleErrors = require('./middlewares/handleErrors')
const userRoutes = require('./api/users/routes')
const eventRoutes = require('./api/events/routes')


//middlewares
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/users', userRoutes)
app.use ('/events', eventRoutes)

app.use(handleErrors)

module.exports = app