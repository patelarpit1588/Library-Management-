const admin = require("../models/admin.model")
const jwt = require("jsonwebtoken")

exports.login = async (req, res) => {
    try {
        const data = req.body
        const user = await admin.findOne({ email: data.email, password: data.password })

        if (!user) {
            res.status(200).json({ message: "Invalid Credentials" })
        } else {
            const token = jwt.sign({ email: user.email, name: user.name }, process.env.JWT_SECRET, { expiresIn: "1h" })

            res.status(200).json({ token, message: "Login successful" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
}