const {Schema, model} =require("mongoose")

const UserSchema =new Schema({
    email :String,
    password : String,
    age : Number,
    blackList:Array
})

const UserModel =model ("user", UserSchema)

module.exports =UserModel