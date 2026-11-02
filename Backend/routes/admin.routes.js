const router = require("express").Router();
const adminController = require("../controllers/admin.controller")
const verifyToken = require("../middlewares/verifyToken")

router.post("/login" , adminController.login )

router.post("/getpassword/:id",verifyToken,adminController.getPassword)

router.put("/changepassword/:id",verifyToken,adminController.changePassword)

router.put("/editprofile/:id",verifyToken,adminController.editProfile)

module.exports = router