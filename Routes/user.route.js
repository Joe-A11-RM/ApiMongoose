const express = require("express")
const router = express.Router()
const usercontrol = require("../Control/user.control")
router.post("/add", usercontrol.adduser)
router.get("/find", usercontrol.findall)
router.put("/update/:id", usercontrol.updateuser)
router.delete("/delete/:id", usercontrol.deleteuser)
module.exports = router