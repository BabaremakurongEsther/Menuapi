const User = require("../models/userSchema")
const bcrypt =require("bcryptjs")
const validate = require("../config/validator");
const { use } = require("express/lib/router");
const req = require("express/lib/request");
const{generateToken}=require("../util/generateToken")


//create a new user

const createUser = async(req, res)=>{
const {username, email, password} =req.body;
const valid = await validate({username, email,password})

if (valid) {
const hashedPassword = await bcrypt.hash(valid.password, 10)
const user = await User.create({
    username,
    email,
    password:hashedPassword,
});
if(user){
    res.status(201).json({
    username:user.username,
email:user.email,
id:user.id,
token:generateToken(user._id),
        
    });
}


}else{
    res.status(400).json({
        message:"Invalid data"
    })
}
};

module.exports={createUser}