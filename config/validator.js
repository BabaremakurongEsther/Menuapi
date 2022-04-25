const yub =require("yup")

function validate(data){
    const userSchema = yub.object().shape({
    username: yub.string().required("username can't be null").min(3).max(20),
    email: yub.string().email().required("email can't be null").min(3).max(50),
    password: yub.string().required("password can't be null").min(8).max(20),
    });
    return userSchema.validate(data);
}
module.exports= validate;