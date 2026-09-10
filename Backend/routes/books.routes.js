const bookcontoller = require("../controllers/books.controller")
const upload = require("../middlewares/upload")

const express = require("express")
const router = express.Router();


router.post("/addbook" , upload.single("image"), bookcontoller.createBook )

router.put("/editbook/:id" , upload.single("image"), bookcontoller.updateBook )

router.get("/singlebook/:id", bookcontoller.getSingleBook)

router.get("/allbook" , bookcontoller.getAllBook)

router.delete("/deletebook/:id", bookcontoller.deleteBook)

module.exports = router