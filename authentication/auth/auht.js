import  Jwt  from "jsonwebtoken";




const auth= async (req,res,next)=>{

   const token= req.header("token")
  Jwt.verify(token,'Mo-Ehab',(err,decode)=>{
if(err)
{
    res.json({message:"fake data",err})

}
else
{
    req.id=decode.userid
    next()
}

  })


}
export{auth}

