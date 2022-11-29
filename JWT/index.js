const express = require('express')
const UserModel=require("./models/User.model")
const jwt =require("jsonwebtoken")
const mongoose=require("mongoose")

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const blackList=[]
app.get('/', (req, res) => res.send('hello'))

//Routes-->Signin /Signup

app.post("/Signup",(req,res)=>{
    const {email,password,age}=req.body
    console.log(email,password,age)

    //save user to db
    const user= new  UserModel({email,password,age})
    user.save()
    res.send("User Created Successfully")
})

app.post("/login",async(req,res)=>{
    const {email,password} =req.body
    const user= await UserModel.findOne({email,password})
    if(!user)
    {
        return res.send("Invalid Credentials")
    }
    const token=jwt.sign({
        id:user._id,
        email:user.email,
        age:user.age
    },"SECRET1234",
    {
        expiresIn:"8 hours"
    })

    const refreshtoken=jwt.sign({
        id:user._id,
        email:user.email,
        age:user.age
    },"REFRESHSECRET1234",
    {
        expiresIn:"7 days"
    })
    res.send({message : "Login Success",token,refreshtoken})
})

app.get("/user/:id",async(req,res)=>{
    const {id} =req.params
    const user=await UserModel.findById(id)
    const token =req.headers["authorization"]
    if(!token)
    {
        return res.status(401).send("Unauthorized")
    }
    try{
        const verification =jwt.verify(token, "SECRET1234")
         return res.send(user)
    }
    catch(e)
    {
        
        return res.status(401).send("Token is invalid")
    }
})


app.post("/refresh",async(req,res)=>{
    const refreshtoken =req.headers.authorization
    try{
        const data=jwt.verify(refreshtoken,"REFRESHSECRET1234")
        const maintoken=jwt.sign(data,"SECRET1234")
        return res.send({token :maintoken})
    }
    catch(e)
    {
        return res.send("refresh token invalid") 
    }
})

app.post("/logout",(req,res)=>{
    const token=req.headers.authorization
    const refreshtoken =req.headers.authorization
    blackList.push(token)
    blackList.push(refreshtoken)
})


mongoose.connect("mongodb://localhost:27017/heroes").then(()=>{
app.listen(8080, () => {console.log('server started on port 8080')})
})