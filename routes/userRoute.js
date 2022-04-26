const {Router} = require("express")
const{createUser,loginUser} = require("../controllers/userController")
const router = require("./foodRoute")

router
.post("/register", createUser)
.post("/login",loginUser)


module.exports=router
