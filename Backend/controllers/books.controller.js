const books = require("../models/books.model")
const path = require("path")
const fs = require("fs");


exports.createBook = async (req, res) => {
    try {
        const data = req.body;

        const result = await books.create({
            title: data.title,
            author: data.author,
            category: data.category,
            quantity: data.quantity,
            discription: data.discription,
            image_url: req.file.filename
        })

        if (result) res.status(200).json({ message: "Book Added Successfully" })

    } catch (error) {
        console.log(error);

        res.status(500).json(error)
    }
}
exports.getAllBook = async (req, res) => {
    try {
        const result = await books.find()
        if (result) res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
        console.log(error);

    }
}
exports.getSingleBook = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await books.findById(id)

        if (result) res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.updateBook = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await books.findById(id)

        const updateData = {
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            quantity: req.body.quantity,
            discription: req.body.discription
        }

        if (!book) res.status(404).json({ message: "No book data found" })

        if (req.file) {

            if (book.image_url) {
                const oldImage = path.join(
                    __dirname,
                    "../public/images",
                    book.image_url
                );

                if(fs.existsSync(oldImage)){
                    fs.unlinkSync(oldImage)
                }
            }
            updateData.image_url = req.file.filename
        }

        const result = await books.findByIdAndUpdate(id ,
             updateData,
             {returnDocument: 'after'})

        res.status(200).json({message : "Book Updated Successfuly"})

    } catch (error) {
        res.status(500).json(error)
        console.log(error);
        
    }
}
exports.deleteBook = async (req, res) => {
    try {
        const id = req.params.id;

        const book = await books.findById(id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        if (book.image_url) {
            const imagePath = path.join(
                __dirname,
                "../public/images",
                book.image_url
            );

            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }
        await books.findByIdAndDelete(id);

        res.status(200).json({
            message: "Book deleted successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}