import JWT from "jsonwebtoken";
import nodemailer from "nodemailer";

const sendMails = async (process) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: 'mody197654@gmail.com',
            pass: 'bydxwrppuohdaifz'
        }
    });
    const token = JWT.sign({ email: process.email }, 'MoEhab', { expiresIn: 60*60 })
    const info = await transporter.sendMail({
        // sender address
        to: `${process.email}`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `${process.message} 
        
        <a href="http://localhost:3000/user/verfiy/${token}">verfiy</a>
        `, // html body
    });
    console.log(info);
}
export { sendMails }