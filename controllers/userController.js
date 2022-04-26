const User = require("../models/userSchema")
const bcrypt =require("bcryptjs")
const validate = require("../config/validator");
const{generateToken}=require("../util/generateToken");
const {token} = require("morgan");


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
//auth a user
async function loginUser(req,res){
    try {
        const{email,password} =req.body
        const user = await user.findone({email})
    
        if (user){
            const isMatch = bcrypt.compare(password,user.password)
            if (isMatch) {
                res.status(200).json({
                    username:user.username,
                 email:user.email ,
                 id:user_id,
                 token:generateToken(user._id), 
                })
            }else{
                res.status(401).json({
                    message:"Invalid password",
                })
            }
        
        }else{
            res.status(401).json({
                message:"Invalid email",
            })
        }
    }catch{
        res.status(400).json({
            message:"user not found",
        })
    }
}

module.exports = {createUser,loginUser};
