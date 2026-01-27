import express from "express"
const app=express()

import dotenv from "dotenv";
dotenv.config();


import cors from "cors"
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
}));

import cookieParser from "cookie-parser"
app.use(cookieParser())

import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/message.js"

import connectDB from "./lib/db.js";

app.use(express.json({limit:"10mb"}));//so that we can use req.body some object
app.use(express.urlencoded({extended:true,limit:"10mb"}))

const port=process.env.PORT;

app.use("/api/v1",authRoutes);
app.use("/api/v1",messageRoutes);

app.get("/",(req,res)=>{
    res.send("hi from home ")
})

app.listen(port,()=>{
    console.log(`app is listening at port  ${port}`);
    connectDB()
})