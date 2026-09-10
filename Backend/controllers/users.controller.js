const users = require("../models/users.model")
const jwt = require("jsonwebtoken")

exports.createUser = async (req, res) => {
    try {
        const data = req.body;
        const result = await users.create(data)

        if (result) res.status(200).json({ message: "User Created" })

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.login = async (req, res) => {
    try {
        const data = req.body
        
        const user = await users.findOne({ email: data.email, password: data.password })

        if (!user) {
            res.status(200).json({ message: "Invalid Credentials" })
        }
        else {
            const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
            res.status(200).json({ message: "Login successful",token })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}