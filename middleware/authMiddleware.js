
const jwt=require("jsonwebtoken");
const User=("../models/user.userSchema");
exports.protect= async function(req,res, next){
    let token;
    if(  req.headers.authorization &&req.headers.authorization.startsWith("Bearer")) {
    try {
        token= req.headers.authorization.split(" ")[1];
        const decoded=jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    }catch (err){
        res.status(401).json({
            message:"Invalid Token"
        });
    }
}
      
    if(!token){
        res.status(401).json({
            message:"You are not authorized"
        });
    }
    
};