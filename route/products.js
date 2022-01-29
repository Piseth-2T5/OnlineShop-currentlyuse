const {Product} = require("../models/products")
const {Category} = require("../models/categories")
const Joi = require("joi")
const express = require("express")
const router = express.Router()

router.get("/", async(req,res)=>{
  const products = await Product.find()
  res.send(products)
})

router.get("/:id", async(req,res)=>{
  const product = await Product.find({_id: req.params.id})
  res.send(product)
})

router.post('/', async(req,res)=>{
  try{
    const {error} = productValidate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    const category = await Category.findById(req.body.categoryId)
    if (!category) return res.send(category)
    const product = new Product({
      name: req.body.name,
      category: {_id: category._id, name: category.name},
      price: req.body.price,
      inStock: req.body.inStock,
      rate: req.body.rate,
    })
    const result = await product
    result.save()
    res.send(result)
  }
  catch(ex){
    for (feild in ex.errors){
      res.send(ex.errors[feild].message)
    }
  }

})

router.put("/:id", async(req,res)=>{
  try{
    const {error} = productValidate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const product = await Product.findById(req.params.id)
    if(!product) return res.status(400).send("no product with this ID")

    const category = await Category.findById(req.body.categoryId)
    if(!category) return res.status(400).send("no category with this ID")
  
    const result = await Product.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      category: {
        _id: category._id, name: category.name
      },
      price: req.body.price,
      inStock: req.body.inStock,
      rate: req.body.rate,} , {new: true})
    res.send(result)
  }
  catch(ex){
    res.send(ex.message)
  }
})

router.delete("/:id", async(req,res)=>{
  const result = await Product.findByIdAndRemove(req.params.id)
  if(!result) return res.status(400).send("no category with this ID")
  res.send(result)
})

module.exports.productRouter =  router

function productValidate(product){
  return Joi.object({
    name: Joi.string().min(3).max(15).required(),
    categoryId: Joi.string().required(),
    price: Joi.number().min(0).required(),
    inStock: Joi.number().min(0).required(),
    rate: Joi.number().max(10)
  }).validate(product)
}