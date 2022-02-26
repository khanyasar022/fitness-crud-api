const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require("cookie-parser")

const app = express()
const handleErrors = require('./middlewares/handleErrors')
const userRoutes = require('./api/users/routes')


//middlewares
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

//routes
app.use('/users', userRoutes)

app.use(handleErrors)

module.exports = app