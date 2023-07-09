import express from 'express'
import { signin } from '../services/logins/signin.js'
import { signup } from '../services/logins/signup.js'
import { valide } from '../authentication/validation/valid.js'
import { EmailVerfiy } from '../services/logins/verify.js'

const user=express.Router()
user.post("/signin",signin)
user.post("/signup",valide,signup)
user.get("/verfiy/:id",EmailVerfiy)


export{user}