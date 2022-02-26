const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require("cookie-parser")

const app = express()


//MIDDLEWARES
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

//routes


module.exports = app