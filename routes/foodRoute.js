const {Router} = require("express")
const { createFood, getMenu } = require("../controllers/foodController");
const { protect,admin}=require("../middleware/authMiddleware");


const router =Router();

router.route("/food").post(protect, admin,createFood).get(protect,getMenu)


module.exports=router