const router = require("express").Router();
const controller = require("../controllers/dashboard.controller")

router.get("/getdashboarddata",controller.getDashboardData)

module.exports= router