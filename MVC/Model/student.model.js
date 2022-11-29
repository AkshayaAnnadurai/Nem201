const {schema,model, Schema} =require("mongoose")

const studentSchema= new Schema({
    name:String,
    age:Number,
    batch:String,
    inPlacement:Boolean,
    rollNo:Number
})

const studentModel=model("student",studentSchema)

module.exports=studentModel