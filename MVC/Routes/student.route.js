const {Router} =require("express")
const { createStudent } = require("../Controllers/student.controller")

const student=Router()

student.get("/",(req,res)=>{
    res.send("All students")
})

student.get("/:id",(req,res)=>{
    res.send("hello")
})

student.post("/",async(req,res)=>{
    const {age,batch,inplacement,name,rollNo} =req.body

    const {status} =await createStudent({age,batch,inplacement,name,rollNo})
  if(status==="ok")
  {
    return res.send("Student Created Successfully")
  }
})

student.put("/:id",(req,res)=>{
    res.send("hello")
})

student.delete("/:id",(req,res)=>{
    res.send("hello")
})

module.exports=student