import jwt from "jsonwebtoken"

const createToken = (res, userId) => {
    try {
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign({userId}, secret, {
            expiresIn: "7d"
        });
        
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        res.json({token})
    }
    catch (error) {
        console.log("error in creating token or cookie",error);
    }
}
export default createToken