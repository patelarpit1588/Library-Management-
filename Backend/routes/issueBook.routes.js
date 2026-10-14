const router = require("express").Router();
const controller = require("../controllers/isuueBook.controller.js")

router.post("/issuerequest" , controller.issueRequest)

router.put("/confirmbook/:id" , controller.confirmBook)

router.put("/rejectbook/:id",controller.rejectRequest)

router.put("/returnbook/:id",controller.returnBook)

router.delete("/deleterecord/:id",controller.deleteRecord)

router.get("/allrequest",controller.getAllRequest)

module.exports = router