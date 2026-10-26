const queries = require("../models/queries.model.")

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