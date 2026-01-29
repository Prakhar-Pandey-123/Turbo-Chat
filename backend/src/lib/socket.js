import {Server} from "socket.io"
import http from "http"
// socket.io runs on http server not express

import express from "express"

const app=express()//handle normal REST APIs(login,sendMessage,etc)

const server=http.createServer(app);
// http server = express server(app) + socket server

const io=new Server(
    server,{//server same for http and socket 
        cors:{
            origin:["http://localhost:5173"],
        }
    }
)//cors-allow FE to connect

let userSocketMap={}//to store all the online users id => { userId : socketId }

io.on("connection",(socket)=>{
    console.log("a user connected",socket.id);
// each user that connects creates a new "socket" on the be ,but there is only socket server in be which is listening 

    const userId=socket.handshake.query.userId;//getting userid from fe
    if(userId) userSocketMap[userId]=socket.id;

    io.emit("getOnlineUsers",Object.keys(userSocketMap));
//emit is used to send events to all the connected clients, here list of online users

    socket.on("disconnect",()=>{
        console.log("a user disconnected",socket.id)

        delete userSocketMap[userId];//deleting that user from the map
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    })
})


export {io,app,server}