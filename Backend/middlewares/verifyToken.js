const jwt = require("jsonwebtoken")

const verifyToken = async (req,res,next) =>{
    try{
        const token = req.headers['authorization']
        if (typeof token !== 'undefined'){
    
            const verify = jwt.verify(token , process.env.JWT_SECRET)

            req.token = verify
            next();
        }else{
            res.status(403).json({message:"Token is not provided"})
        }


    }catch(err){
        res.status(500).json({message:"Invalid or Expired Token"})
    }
}

module.exports = verifyToken