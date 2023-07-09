import Joi from "joi";

const schema=Joi.object({
    name:Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email:Joi.string().email().required(),
    password:Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    Repassword:Joi.ref("password")
})

const valide=async(req,res,next)=>{


    const {error}=schema.validate(req.body,{abortEarly:false})

    if(error)
    {
        let arr=[]
        error.details.map((mes)=>{
            arr.push(mes.message)
        })
        res.json({message:arr})
    }
    else
    {        next()
    }
}

export{valide}