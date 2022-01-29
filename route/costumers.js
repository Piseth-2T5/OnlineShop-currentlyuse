const {Costumer, costumerValidate} = require("../models/costumers")
const Joi = require("joi")
const express = require("express")
const router = express.Router()

router.get("/", async(req, res) =>{
  const costumers = await Costumer.find()
  res.send(costumers)
})

router.get("/:id", async(req,res)=>{
  const costumer = await Costumer.findById(req.params.id)
  if(!costumer) return res.status(400).send("costumer doesn't exist or Invalid ID")
  res.send(costumer)
})

router.post("/", async(req,res)=>{
  const {error}  = costumerValidate(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  const costumer = await new costumer({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  }).save()

  res.send(costumer)
}) 

router.put("/:id", async(req,res)=>{
  const {error}  = costumerValidate(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  const costumer = await Costumer.findOneAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber
  }, {new: true})

  res.send(costumer)
}) 


router.delete("/:id", async(req,res)=>{
  const costumer = await Costumer.findByIdAndRemove(req.params.id)
  if(!costumer) return res.status(400).send("costumer doesn't exist or Invalid ID")
  res.send(costumer)
})

module.exports.costumerRouter = router