const queries = require("../models/queries.model")

exports.createQuery = async (req,res) =>{
    try {
        const data = req.body;
        await queries.create(data)
        res.status(200).json({message :"Query submitted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.getUserQuery = async(req,res) =>{
    try {
        const email = req.body.email
        const data = await queries.find({email:email})
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.getAllQueries = async(req,res) =>{
    try {
        const data = await queries.find();
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

exports.replyQuery = async(req,res) =>{
    try {
        const id = req.params.id;
        const reply = req.body.reply 
        await queries.findByIdAndUpdate(id,{reply:reply,status:"replied"},{returnDocument:"after"})
        res.status(200).json({message:"Query replied successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}