import mongoose from "mongoose";
import  dotenv  from 'dotenv'
dotenv.config()
const db=process.env.CONNECTION_STRING

function DbConnection(){
    mongoose.connect(`${db}`)
.then(()=>{
console.log("Database Connected");
})
}
export{DbConnection}
/*
moheroku ngodb+srv://Mody:kXwUiRxSzXpQGD9o@cluster0.rboquiy.mongodb.net/Saraha

*/