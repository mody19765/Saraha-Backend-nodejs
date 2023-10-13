import { sendMails } from "../../authentication/email/SendE.js";
import { UserModel } from "../../models/user.models.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

const signup = async (req, res) => {
    const { name, email, password, Repassword } = req.body
    const user = await UserModel.findOne({ email })
    if (user) {
        res.json({ messahe: "email is already exits" })
    }
    else {
        bcrypt.hash(password, 4, async function (err, hash) {
            await UserModel.insertMany({ name, email, password: hash })
            sendMails({ email, message: "hello" })
            res.json({ messahe: "added" })
        });
    }
}
export { signup }