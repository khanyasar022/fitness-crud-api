const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    mobileNumber: {
        type: String,
    },
    weight: {
        type: Number,
    },
    height: {
        type: Number,
    },
    bmi: {
        type: Number,
    }
}, { timestamps: true})

const User = new mongoose.model("User", userSchema)
module.exports = User