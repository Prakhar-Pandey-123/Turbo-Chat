import jwt from "jsonwebtoken"
import User from "../models/users.js";

const checkLog = async (req, res, next) => {
    try {
        console.log("inside checklog")
        const token = req.cookies.jwt;
        console.log("token=",token)
        if(!token){
            return res.status(400).json({
                message:"missing token"
            })
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const userId=decoded.userId;

        const user = await User.findById(userId);
        if (user == null || !user) {
            return res.status(400).json({
                message: "user not found"
            })
        }
        else {
            console.log("user=",user);
            req.user = user;
            next()
        }

    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"internal server error at checkLog"
        })

    }
}
export default checkLog