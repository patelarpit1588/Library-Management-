const router = require("express").Router();
const controller = require("../controllers/queries.controller")

router.post("/createquery" ,controller.createQuery)

module.exports= router