const router = require("express").Router();
const controller = require("../controllers/isuueBook.controller.js")
const verifyToken = require("../middlewares/verifyToken")

router.use(verifyToken)

router.post("/issuerequest" , controller.issueRequest)

router.put("/confirmbook/:id" , controller.confirmBook)

router.put("/rejectbook/:id",controller.rejectRequest)

router.put("/returnbook/:id",controller.returnBook)

router.get("/allrequest",controller.getAllRequest)

router.get("/userbooks/:id",controller.getUserBooks)


module.exports = router