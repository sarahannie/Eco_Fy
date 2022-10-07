const jwt = require('jsonwebtoken')
const User = require('./User')

const auth = async(req,res,next)=>{

            const token = req.cookies.jwt
            if(token){

            jwt.verify(token,process.env.JWT_SECRET, async (err,decodedToken)=>{
                if(err){
                    res.json({status:false});
                    next()
                }
                else{
                    const user = await User.findById(decodedToken.id).select('-password')
                if(user){
                    res.json({status:true , user: user.email})
                }
                else{
                    res.json({status:false});
                    next()
                }
                }
               
            })}
    
            else{
                res.json({status:false});
                next() 
            }

}

module.exports = auth