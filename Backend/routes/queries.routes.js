const router = require("express").Router();
const controller = require("../controllers/queries.controller")

router.post("/createquery" ,controller.createQuery)

router.post("/getuserquery",controller.getUserQuery)

router.get("/allqueries",controller.getAllQueries)

router.put("/replyquery/:id",controller.replyQuery)

module.exports= router