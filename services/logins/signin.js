import { UserModel } from "../../models/user.models.js";
import  bcrypt from "bcrypt";
import  Jwt  from "jsonwebtoken";
const signin=async (req,res)=>{
    const{email,password}=req.body
  const user= await UserModel.findOne({email})


  if(user)
  {
    const match =bcrypt.compare(password,user.password)
    if(match)
    { 
      if(user.emailconfirma==true)
      {
        const token=  Jwt.sign({userid:user._id,name:user.name,email:user.email, emailconfirm:user.emailconfirma},'Mo-Ehab')
        res.json({message:"success",token})
      }
      else
      {
        res.json({message:"Please verify "})
      }
   
    }
    else
    {
        res.json({message:"password is wrong"})

    }
  }
  else
  {
      res.json({message:"not found email"})
  }

}

export{signin}