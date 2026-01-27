import bcrypt from "bcrypt"
import User from "../models/users.js"
import createToken from "../lib/utils.js"
import cloudinary from "../lib/cloudinary.js"

const signUp = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: "all fields are required"
            })
        }
        if (password.length < 6) {
            return res.status(400).json({
                message: "password should be of minimum 6 length"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        const newuser = await User.create({
            fullName: fullName,
            email: email,
            password: hashed
        })

        createToken(res, newuser._id);

        return res.status(200).json({
            message: "user created successfully",
        })
    }
    catch (error) {
        console.log("error in signup", error)
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({
                message: "invalid credentials"
            })
        }
        const user = await User.findOne({ email: email });
        const verified = await bcrypt.compare(password, user.password);

        if (verified) {
            createToken(res, user._id);
            return res.status(200).json({
                message: "successfully logged in"
            })
        }
        else {
            return res.status(400).json({
                message: "invalid credentials"
            })
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

const logOut = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        return res.status(200).json({
            message: "logged out succcessfully"
        })
    }
    catch (error) {
        return res.status(500), json({
            message: "internal server error",
            error: error
        })
    }
}


const update = async (req, res) => {
    try {
        const { fullName, pic } = req.body;
        const userId = req.user._id;

        if (!userId || !fullName || !pic) {
            return res.status(400).json({
                message: "every field is required"
            })
        }

        const responseCloud = await cloudinary.uploader.upload(
            pic, { folder: "profiles" })

        const response = await User.findByIdAndUpdate(userId, {
            fullName: fullName,
            pic: responseCloud.secure_url
        }, { new: true }).select("-password")

        return res.status(200).json({
            message: "profile updated successfully",
            response: response
        })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "internal server error at update"
        })
    }

}

const userData = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(400).json({
                message: "user not found"
            })
        }
        return res.status(200).json({
            user: user
        })
    }
    catch (error) {
        console.log(error)
        return res.status(200).json({
            message:"internal server error"
        })
    }
}

const check=(req,res)=>{
    return res.status(200).json({
        message:"verified"
    })
}

export { signUp, logIn, logOut, update, userData,check }