const {Category, validateCategory} = require("../models/categories")
const Joi = require("joi")
const express = require("express")
const router = express.Router()

router.get("/", async(req, res) =>{
  const categories = await Category.find()
  res.send(categories)
})

router.get("/:id", async(req,res)=>{
  const category = await Category.findById(req.params.id)
  if(!category) return res.status(400).send("Category doesn't exist or Invalid ID")
  res.send(category)
})

router.post("/", async(req,res)=>{
  const {error}  = validateCategory(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  const category = await new Category({
    name: req.body.name
  }).save()

  res.send(category)
}) 

router.put("/:id", async(req,res)=>{
  const {error}  = validateCategory(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  const category = await Category.findOneAndUpdate(req.params.id, {
    name: req.body.name
  }, {new: true})

  res.send(category)
}) 


router.delete("/:id", async(req,res)=>{
  const category = await Category.findByIdAndRemove(req.params.id)
  if(!category) return res.status(400).send("Category doesn't exist or Invalid ID")
  res.send(category)
})


module.exports.categoryRouter = router