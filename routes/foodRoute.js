const {Router} = require("express")
const { createFood, getMenu} = require("../controllers/foodController")
const {protect, admin} = require("../middlewares/AuthMiddleware")


const router = Router()

router.route("/food").post(protect, admin, createFood).get(protect, getMenu)

module.exports=router