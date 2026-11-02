const usersController = require("../controllers/users.controller")
const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken")

router.post("/signup", usersController.createUser)

router.post("/login", usersController.login)

router.get("/alluser", verifyToken, usersController.getAllUsers)

router.post("/getpassword/:id",verifyToken, usersController.getPassword)

router.put("/changepassword/:id",verifyToken, usersController.changePassword)

router.put("/editprofile/:id",verifyToken, usersController.editProfile)

module.exports = router