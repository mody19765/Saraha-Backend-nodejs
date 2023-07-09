import express from 'express'
import { DbConnection } from './config/dbConnection.js'
import { user } from './api/users.js'
import { mesg } from './api/message.js'
import  dotenv  from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT||3000
app.use(express.json())
app.use("/user",user)
app.use("/message",mesg)
app.get("/",(req,res)=>{
    res.send("hello")
})

DbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))