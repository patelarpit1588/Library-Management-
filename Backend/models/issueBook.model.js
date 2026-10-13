const mongoose = require("mongoose")

const isuueBookShema = mongoose.Schema({
    book : {
        type : mongoose.Schema.Types.ObjectId,
        ref :"booksCollection"
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref :"usersCollection"
    },
    status : String,
   requestDate: {
    type: String,
    default: () => new Date().toISOString().split("T")[0]
}
})

module.exports = mongoose.model("issueBookCollection" , isuueBookShema)