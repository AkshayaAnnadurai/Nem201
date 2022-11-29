const fs=require("fs")

//Buffer= Array like data Structure that holds binary Code
// Never touch Sync

fs.readFile("./data.txt", (err,data)=>{
    console.log(data.toString())
})
fs.readFile("./download.jpg", (err,data)=>{
    console.log(data)
})

const buffer=Buffer.from("hello")
console.log(buffer)

const buffers=Buffer.alloc(10)
buffer.write("111112222233")
console.log(buffers)


// Streams

// Synchronous=It read the entire file and then moves on

const  data=fs.readFileSync("./data.txt")
console.log("1+1")

// Asynchronous= while reading it also do some other work
fs.readFile("./data.txt",(err,data)=>{
    console.log("file read")
})
console.log("1+1")

const readStream =fs.createReadStream("./data.txt")
readStream.on("data",function(chunk)
{
    console.log("read 1 part")
})

readStream.on("end",()=>
{
    console.log("file read successfully")
})