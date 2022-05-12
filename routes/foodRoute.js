const {Router} = require("express")
const { createFood, getMenu,deleteMenu,updateMenu} = require("../controllers/foodController")
const {protect, admin} = require("../middlewares/AuthMiddleware")

const router = Router()

router.route("/foods").post(createFood).get(getMenu)
router.route("/foods/:id").get(getMenu).delete(deleteMenu).put(updateMenu)

module.exports=router