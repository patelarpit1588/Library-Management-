const usersController = require("../controllers/users.controller")
const router = require("express").Router();

router.post("/signup", usersController.createUser)

router.post("/login", usersController.login)

module.exports = router