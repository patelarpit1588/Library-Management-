const mongoose = require("mongoose")

const queryschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: () => new Date().toISOString().split("T")[0]
    },
    status: {
        type: String,
        default : "pending"
    },
    reply: {
        type: String,
        default:""
    }
})


module.exports = mongoose.model("queriesCollection", queryschema)