const {studentModel} =require("../Model")


async function createStudent({age,batch,inplacement,name,rollNo})
{
    const student=new studentModel({age,batch,inplacement,name,rollNo})
    await student.save()
    return{
        status: "ok",
        message: "User Created Successfully"
    }
}

module.exports={createStudent}