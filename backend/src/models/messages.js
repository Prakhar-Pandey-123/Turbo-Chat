import mongoose from "mongoose";
import User from "./users.js";

const messageSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Types.ObjectId,
        ref:User,
        required:true
    },
    receiverId:{
        type:mongoose.Types.ObjectId,
        ref:User,
        required:true
    },
    pic:{
        type:String
    },
    text:{
        type:String
    }
},{timestamps:true})

const Message= new mongoose.model("Message",messageSchema);
export default Message