const router = require("express").Router();
const controller = require("../controllers/dashboard.controller")
const verifyToken = require("../middlewares/verifyToken")

router.get("/getdashboarddata", verifyToken, controller.getDashboardData)

module.exports= router