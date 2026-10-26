const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        
    },
    password: String,
    phone: String
})

module.exports = mongoose.model("usersCollection", usersSchema)