
const { User } = require("../models/users")
const Joi = require("joi")
const express = require("express")
const router = express.Router()

router.post("/",async (req,res)=>{

  const {error} = validate(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  const email = await User.findOne({email: req.body.email})
  if(!email) return res.status(400).send("Invalid email or password")

  const password = await User.findOne({password: req.body.password})
  if(!password) return res.status(400).send("Invalid email or password")

  res.send("Loged in")

})

function validate(user){
  return Joi.object({
    email: Joi.string().min(5).max(20).required(),
    password: Joi.string().min(4).max(10).required()
  }).validate(user)
}

module.exports.authRouter = router