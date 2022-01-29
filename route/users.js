const mongoose = require("mongoose")
const express = require("express")
const router = express.Router()
const {User, validate} = require("../models/users")

router.post("/",async (req,res)=>{

  const {error}=  validate(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  const email = await User.findOne({email: req.body.email})
  if(email) return res.status(400).send("Uer already registered")
  const result = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
  await result.save()
  res.send({
    username: result.username,
    email: result.email
  })

})


module.exports.userRouter = router