const router = require("express").Router();
const adminController = require("../controllers/admin.controller")

router.post("/login" , adminController.login )

router.post("/getpassword/:id",adminController.getPassword)

router.put("/changepassword/:id",adminController.changePassword)

router.put("/editprofile/:id",adminController.editProfile)

module.exports = router