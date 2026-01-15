import mongoose from "mongoose"

const connectDB=async()=>{
    try{
        const url=process.env.MONGO_URI;
        await mongoose.connect(url);
        console.log("db connected successfully")
    }
    catch(error){
        console.log("connection to db failed",error);
    }
}

export default connectDB