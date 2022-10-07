const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const Joi = require('@hapi/joi')
const jwt = require('jsonwebtoken')
const User = require('./User')
const cookie = require('cookie')
const auth = require('./auth')
const validator = require('node-email-validation')

const validation = Joi.object({
    firstname: Joi.string().min(3).required(),
    lastname: Joi.string().min(3).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/).required()
})

const loginvalidation = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/).required()
})

const generateToken= (id)=>{
    const verify = jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: "30d"})
    return verify
};
// register
router.post('/api/register', async(req,res)=>{
    const { error } = validation.validate(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    try{
        const checkUser = await User.findOne({email : req.body.email})
        verifyEmail = validator.is_email_valid(req.email)
        if(checkUser) {
            res.status(400).send('user with the email exists')
        }
        if(verifyEmail === true){
            res.status(400).send('Please enter a valid email')
        }
        else{
            const {firstname,lastname,email} = req.body
            const salt = await bcrypt.genSalt(0)
            const hashedpassword = await bcrypt.hash(req.body.password,salt)
    
    
            const user = new User({
               fname: firstname,
               lname: lastname,
                email,
                password: hashedpassword
            })
            await user.save()
            
            res.status(201).send({
                message: "You have successfully registered",
            })
        }
      
        // const token = generateToken(user.id)
        // res.cookie('jwt',token, {withCredentials:true , httpOnly: false })
        // send mail with nodemailer
      
    }
    catch(error){
        console.log(error)
    }
})

router.post('/api/login', async(req,res)=>{
    const { error } = loginvalidation.validate(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    try{
        const checkUser = await User.findOne({email : req.body.email})
        if(!checkUser){
            res.status(400).send({message:'Incorrect username or password'})
        }
        const validPassword = await bcrypt.compare(req.body.password , checkUser.password)
        if(!validPassword){
            return res.status(400).send('Invalid Password')
        }
        else{
            const token = generateToken(checkUser.id)
            res.cookie('jwt',token, {withCredentials:true , httpOnly: false })

            res.status(201).json({
                message: "You have successfully logged in",
                _id: checkUser.id,
    
            })
        }
    
     }
    catch(error){
         console.log(error)   
        }
    }
)
router.post('/',auth)

module.exports = router