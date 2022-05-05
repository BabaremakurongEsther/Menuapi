const jwt = require("jsonwebtoken");

exports.generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET,{expiresIn:"30d"})
};


// or
// const generateToken = (id) => {
//     return jwt.sign(id, process.env.JWT_SECRET,{expiresIn:"30d"})
// };
// const generateToken = function() => {
//     return jwt.sign(id, process.env.JWT_SECRET,{expiresIn:"30d"})
// };

