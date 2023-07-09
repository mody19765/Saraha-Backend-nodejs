import mongoose from "mongoose"

const schema=new mongoose.Schema({

    name:String,
    email:String,
    password:String,
    Repassword:String,
    emailconfirma:{
        type:Boolean,
        default:false
    }
})

const UserModel=mongoose.model("Users",schema)
export{UserModel}
