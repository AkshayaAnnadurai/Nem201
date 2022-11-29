const express =require("express")
const mongoose =require("mongoose")
const {student,teacher} =require("./Routes")

const app=express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use("/student",student)
app.use("/teacher",teacher)
mongoose.connect("mongodb://localhost:27017/db").then(()=>{
app.listen(8080,()=>{
    console.log("server started on port 8080")
})
})