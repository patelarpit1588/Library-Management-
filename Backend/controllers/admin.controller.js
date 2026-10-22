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

            res.status(200).json({ token, user, message: "Login successful" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
}

exports.getPassword = async(req,res) =>{
    try {
        const id = req.params.id
        const data = await admin.findById(id,{password:1,_id:0})
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.changePassword = async(req,res) =>{
    try {
        const id = req.params.id
        const newPassword = req.body.newPassword

        const data = await admin.findByIdAndUpdate(id,{password:newPassword},{new:true})
        res.status(200).json({message:"Password changed successfully"})

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.editProfile = async(req,res) =>{
    try {
        const id =req.params.id
        const newData = req.body
        console.log(newData);
        
        const data = await admin.findByIdAndUpdate(id, newData, {returnDocument:'after'})
        res.status(200).json({message:"Profile updated successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}