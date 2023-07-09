import { MessagesModel } from "../../models/message.js";

const getmsg=async(req,res)=>{
    const Messages= await MessagesModel.find({UserID:req.id},{_id:0,message:1})
    res.json({message:"succes",Messages})
   
}
export{getmsg}