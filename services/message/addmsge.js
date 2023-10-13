import { MessagesModel } from "../../models/message.js"


const addmesg = async (req, res) => {
    const { message, UserID } = req.body
    const messages = await MessagesModel.insertMany({ message, UserID })
    res.json({ message: "mesg send" })
}
export { addmesg }