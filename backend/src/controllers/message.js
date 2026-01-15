import cloudinary from "../lib/cloudinary.js";
import Message from "../models/messages.js";
import User from "../models/users.js"

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
        const id = req.params;
        const myId = req.userId;

        const messages = await Message.find({
            $or: [
                { senderId: id, receiverId: myId },
                { senderId: myId, receiverId: id }
            ]
        });
        // todo: add live functionality
        return res.status(200).json({
            success: true,
            messages: messages
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })

    }

}

const sendMessage = async (req, res) => {
    try {
        const id = req.params;
        const { text, pic } = req.body;
        const senderId = req.userId;

        if (pic) {
            const cloudres = await cloudinary.uploader.upload(pic);
            const imgurl = cloudres.secure_url;
        }
        const mssg = await Message.create({
            senderId: senderId,
            receiverId: id,
            text: text,
            pic: imgurl
        })
    }
    catch (error) {
        
    }

}

export { allMessages, allUsers, sendMessage }