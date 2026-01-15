import express from "express"
const app=express()

import cors from "cors"
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
}));

import cookieParser from "cookie-parser"
app.use(cookieParser())

import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/message.js"

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./lib/db.js";

app.use(express.json());//so that we can use req.body some object

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