const usersController = require("../controllers/users.controller")
const router = require("express").Router();

router.post("/signup", usersController.createUser)

router.post("/login", usersController.login)

router.get("/alluser", usersController.getAllUsers)

router.post("/getpassword/:id",usersController.getPassword)

router.put("/changepassword/:id",usersController.changePassword)

router.put("/editprofile/:id",usersController.editProfile)

module.exports = router