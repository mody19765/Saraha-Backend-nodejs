import { addmesg } from "../services/message/addmsge.js"
import express from 'express'
import { getmsg } from "../services/message/getmsge.js"
import { auth } from "../authentication/auth/auht.js"
const mesg = express.Router()
mesg.post('/Addmessage', addmesg)
mesg.get('/getmesg',auth, getmsg)
export { mesg }