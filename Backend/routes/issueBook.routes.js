const router = require("express").Router();
const controller = require("../controllers/isuueBook.controller.js")

router.post("/issuerequest" , controller.issueRequest)

router.put("/confirmbook/:id" , controller.confirmBook)

router.get("/allrequest",controller.getAllRequest)

module.exports = router