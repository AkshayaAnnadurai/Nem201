const {WebSocketServer} = require("ws")

//emits
const wss= new WebSocketServer({
    port :8000
})

// listen
wss.on("listening",()=>{
    console.log("Server Started")
})

wss.on("connection",(conn)=>{
    conn.on("message",(data)=>{
        console.log("client said :",data.toString("utf-8"))
    conn.send("hello user")
    })
    conn.send("Welcome User")
    console.log("Connection starts ")
})


