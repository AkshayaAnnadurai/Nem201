const {Router} =require("express")

const teacher=Router()

teacher.get("/",(req,res)=>{
    res.send("All teachers")
})

teacher.get("/:id",(req,res)=>{
    res.send("hello")
})

teacher.post("/",(req,res)=>{
    res.send("hello")
})

teacher.put("/:id",(req,res)=>{
    res.send("hello")
})

teacher.delete("/:id",(req,res)=>{
    res.send("hello")
})

module.exports=teacher