const issueBook = require("../models/issueBook.model")
const book = require("../models/books.model")

exports.issueRequest = async(req,res) =>{
    try {

        const {book,user} = req.body;

        const result = await issueBook.create({book,user,status:"pending"})
        if(result) res.status(200).json({message :"Your request submiteed successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.confirmBook = async(req,res) =>{
    try {
        const id = req.params.id;
        
        const result = await issueBook.findByIdAndUpdate(id ,{status :"issued"} ,{returnDocument: 'after'})

        if(result) {
            const book = await book.findById(result.book)
            if(book){
                const updatedQuantity = Number(book.quantity) - 1;
                await book.findByIdAndUpdate(result.book, { quantity: updatedQuantity }, { returnDocument: 'after' });
                res.status(200).json({message :"Book issued successfully"})
            }
            
        }

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.rejectRequest = async(req,res) =>{
    try {
        const id = req.params.id;
        await issueBook.findByIdAndUpdate(id , {status :"rejected"} ,{returnDocument:'after'} );
        res.status(200).json({message : "Book issue request rejected"})

    } catch (error) {
        res.status(500).json(error)
        console.log(error);
        
    }
}
exports.returnBook = async(req,res) =>{
    try {
        const id = req.params.id;
        await issueBook.findByIdAndUpdate(id , {status :"returned"} ,{returnDocument:'after'} );
        res.status(200).json({message : "Book marked as returned"})

    } catch (error) {
        res.status(500).json(error)
        console.log(error);
        
    }
}

exports.getAllRequest = async (req,res) =>{
    try {

        const data = await issueBook.find().populate("book").populate("user")
        res.status(200).json(data);

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
        
    }
}

exports.deleteRecord = async(req,res) =>{
    try {
        const id = req.params.id;
        await issueBook.findByIdAndDelete(id)
        res.status(200).json({message :"Record deleted successfully"})
        
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
        
    }
}

exports.getUserBooks = async(req,res) =>{
    try {
        const id = req.params.id;
        const data = await issueBook.find({user:id}).populate("book").populate("user")
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}