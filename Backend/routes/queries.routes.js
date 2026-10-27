const router = require("express").Router();
const controller = require("../controllers/queries.controller")

router.post("/createquery" ,controller.createQuery)

router.post("/getuserquery",controller.getUserQuery)

module.exports= router