import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    pic:{
        type:String,
        default:""
    }
})
const User=new mongoose.model("User",userSchema)
export default User