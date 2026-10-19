const usersController = require("../controllers/users.controller")
const router = require("express").Router();

router.post("/signup", usersController.createUser)

router.post("/login", usersController.login)

router.get("/alluser", usersController.getAllUsers)

module.exports = router