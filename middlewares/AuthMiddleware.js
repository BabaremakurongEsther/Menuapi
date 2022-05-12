const jsonwebtoken = require("jsonwebtoken")
const User =require("../models/userSchema")

exports.protect= async function(req, res, next) {
let token;
if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try{
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id)
        next();
    }catch(err){
        res.status(400).json({
            message:"Invalid token"
        })
    }
    }
    if(!token){
        res.status(400).json({
            message:"you are not authorized"
        })
    }

};

//is admin middleware

exports.admin =async function (req, res, next) {
    if (req.user && req.user.isAdmin) {
        res.status(401).json({
            message:"you are not authorized admin",
        });
    }
}