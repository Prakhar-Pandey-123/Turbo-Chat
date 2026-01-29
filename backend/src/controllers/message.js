import cloudinary from "../lib/cloudinary.js";
import Message from "../models/messages.js";
import User from "../models/users.js"
import mongoose from "mongoose";
const allUsers = async (req, res) => {
    try {
        const myId = req.user._id;
        const users = await User.find({ _id: { $ne: myId } }).select("-password");

        return res.status(200).json({
            users: users
        });
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "internal server error"
        })
    }
}


const allMessages = async (req, res) => {

    try {
        let id = req.body.id._id;
        let myId = req.user._id;
        console.log("id=", id)
        console.log("myId=", myId)
        const messages = await Message.find({
            $or: [
                {
                    senderId: new mongoose.Types.ObjectId(id),
                    receiverId: new mongoose.Types.ObjectId(myId)
                },
                {
                    senderId: new mongoose.Types.ObjectId(myId)
                    , receiverId: new mongoose.Types.ObjectId(id)
                }
            ]
        }).sort({ createdAt: 1 });
        // todo: add live functionality
        return res.status(200).json({
            success: true,
            messages: messages
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "internal server error"
        })

    }

}

const sendMessage = async (req, res) => {
    try {
        const { text = "", pic = "", id } = req.body;
        const senderId = req.user._id;
        if (!id || (!text && !pic)) {
            return res.status(400).json({ message: "We require id and text or pic" })
        }
        let mssg;
        if (pic !== "") {
            const cloudres = await cloudinary.uploader.upload(pic);
            const imgurl = cloudres.secure_url;
             mssg = await Message.create({
                senderId: senderId,
                receiverId: id,
                text: text,
                pic: imgurl
            })
        }

        else if (text !== "") {
             mssg = await Message.create({
                senderId: senderId,
                receiverId: id,
                text: text,
                pic: ""
            })
        }
        return res.status(200).json({
            message: "mssg send successfully",
            mssg:mssg
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "internal server error at mssg"
        })

    }

}

export { allMessages, allUsers, sendMessage }