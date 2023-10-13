import Jwt from "jsonwebtoken"
import { UserModel } from "../../models/user.models.js"

const EmailVerfiy = async (req, res) => {
    const { id } = req.params
    Jwt.verify(id, 'MoEhab', async (err, decoded) => {
        if (err) {
            res.json({ meesage: err.message })
        }
        else {
            const user = await UserModel.findOne({ email: decoded.email })
            if (user) {
                await UserModel.findOneAndUpdate({ email: decoded.email }, { emailconfirma: true })
                res.json({ message: "succes" })
            }
            else {
                res.json({ message: "user not found" })

            }

        }

    })
}
export { EmailVerfiy }
