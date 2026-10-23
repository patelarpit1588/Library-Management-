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
            res.status(200).json({ message: "Login successful",token ,user })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.getAllUsers = async(req,res) =>{
    try {
        const data = await users.find()

        if(data) res.status(200).json(data)

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.getPassword = async(req,res) =>{
    try {
        const id = req.params.id;
        const data = await users.findById(id,{password:1,_id:0})
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.changePassword = async(req,res) =>{
    try {
        const id = req.params.id;
        const newPassword = req.body.newPassword
        const data = await users.findByIdAndUpdate(id,{password:newPassword},{returnDocument:"after"})
        res.status(200).json({message:"Password Changes successfully"})
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
        
        const data = await users.findByIdAndUpdate(id, newData, {returnDocument:'after'})
        res.status(200).json({message:"Profile updated successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}