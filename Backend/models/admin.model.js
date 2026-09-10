const mongoose = require("mongoose");

const adminShcema = mongoose.Schema({
    email : String,
    password:String,
    name:String
})

module.exports = mongoose.model("adminCollection" , adminShcema)