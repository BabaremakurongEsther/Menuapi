const Food = require("../models/foodSchema")


//create a menu
const createFood =async (req, res)=>{
    const newFood = new Food(
        {
            name:req.body.name,
            type:req.body.type,
            ingredients:req.body.ingredients,
            recipe:req.body.recipe
        }
    )
  await   newFood.save()
     res.status(200).json(newFood)
}
 //get all menu
 const getMenu =async(req, res)=>{
     const foods = await Food.find({});
     res.status(200).json(foods)
}

// delete a menu item
const deleteMenu =async (req, menuIndex) => {
  const db = req.app.db;
  return getMenu(db)
  .then((menu) => {
    // Remove menu item
    menu.items.splice(menuIndex, 1);
    return db.menu.updateOne({}, { $set: { items: menu.items } }, { upsert: true })
    .then(() => {
      return true;
    });
  })
  .catch(() => {
    return false;
  });
}
// updates and existing menu item
const updateMenu =async (req) => {
  const db = req.app.db;
  return getMenu(db)
  .then((menu) => {
    // find menu item and update it
    const menuIndex = _.findIndex(menu.items, ['title', req.body.navId]);
    menu.items[menuIndex].title = req.body.navMenu;
    menu.items[menuIndex].link = req.body.navLink;
    return db.menu.updateOne({}, { $set: { items: menu.items } }, { upsert: true })
    .then(() => {
      return true;
    });
  })
  .catch(() => {
    return false;
  });
}



module.exports={createFood, getMenu, deleteMenu,updateMenu}