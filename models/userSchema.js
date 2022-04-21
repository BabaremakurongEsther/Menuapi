const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    }      
}, {
    timestamps:true
}
)

const User = mongoose.model("user", userSchema);
module.exports=User;