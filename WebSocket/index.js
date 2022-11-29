const express = require("express")
const http =require("http")
const {Server}=require("socket.io")

const app= express() //Routing & Middleware
const server= http.createServer(app) //REST HTTP Server
const io=new Server(server) // Websocketserver
let totaluser=0
io.on("connection",(conn)=>{
    totaluser+=1
    console.log("new user connected",totaluser)
    io.emit("newuser")
    conn.on("newmessage",(data)=>{
       io.emit("newmessage",data)
        console.log("client sent",data)
    })
    conn.on("disconnect",()=>{
        totaluser-=1
        console.log("user disconnected ",totaluser)
    })
})



app.use(express.urlencoded({extended :true}))

app.use(express.json())

app.get("/",(req,res)=>res.sendFile(__dirname+"/index.html"))

server.listen(8080,()=>{
    console.log("server started on port 8080")
})