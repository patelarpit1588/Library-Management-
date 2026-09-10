const mongoose = require("mongoose")

const booksSchema = mongoose.Schema({
    title:{
        type : String,
        unique:true,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    category :{
        type :String,
        required:true
    },
    quantity :{
        type:Number,
        required:true
    },
    discription :{
        type : String,
        required:true
    },
    image_url:{
        type : String,
        required : true
    }
})

module.exports = mongoose.model("booksCollection" ,booksSchema)