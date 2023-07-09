import mongoose from "mongoose"
const schema=new mongoose.Schema({

    message:String,
    UserID:{
       type: mongoose.SchemaTypes.ObjectId
    },
   
})
const MessagesModel=mongoose.model("Messages",schema)
export{MessagesModel}
