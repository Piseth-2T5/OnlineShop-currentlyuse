const Joi = require('joi')
const Fawn = require("fawn")
const express = require("express")
const router = express.Router()
const {Sale,saleValidate} = require("../models/sales")
const {Costumer} = require("../models/costumers")
const {Product} = require("../models/products")
const mongoose = require('mongoose')

Fawn.init(mongoose)

router.get("/", async(req,res)=>{
  const sales = await Sale.find()
  res.send(sales)
})

router.get("/:id", async (req, res)=>{
  const sale = await Sale.findById(req.params.id)
  res.send(sale)
})

router.post("/", async(req,res)=>{
  const {error} = saleValidate(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  const costumer = await Costumer.findById(req.body.costumerId)
  if(!costumer) return res.status(400).send("Invalid costumer ID")

  const product = await Product.findById(req.body.productId)
  if(!product) return res.status(400).send("Invalid product ID")

  if(req.body.selected > product.inStock) return res.status(400).send("We run out of stock, pls select lower amount.")

  try{
    const sale = await new Sale({
      costumer: {
        _id: costumer._id, 
        name: costumer.name,
        phoneNumber: costumer.phoneNumber
      },
      product: {
        _id: product._id,
        name: product.name,
        price: product.price
      }, 
      selected: req.body.selected,
      cost: req.body.selected * product.price
    })

    new Fawn.Task()
    .save("sales", sale)
    .update("products", {_id: product._id}, {
      $inc: { inStock: -req.body.selected }
    })
    .run()

    res.send(sale)


  }catch(ex){
    for (feild in ex.errors){
      console.log(ex.errors[feild].message)
    }
    console.log(ex.errors)
    res.send("error")
  }
})

router.put("/:id", async(req,res)=>{  
  const {error} = saleValidate(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  const costumer = await Costumer.findById(req.body.costumerId)
  if(!costumer) return res.status(400).send("Invalid costumer ID")

  const product = await Product.findById(req.body.productId)
  if(!product) return res.status(400).send("Invalid product ID")

  const sale = await Sale.findOneAndUpdate(req.params.id, {
    costumer: {
      _id: costumer._id, 
      name: costumer.name,
      phoneNumber: costumer.phoneNumber
    },
    product: {
      _id: product._id,
      name: product.name,
      price: product.price
    }, 
    cost: req.body.selected * product.price,
    selected: req.body.selected,
  }, {new: true})
  res.send(sale)
})

router.delete('/:id',async (req,res) =>{
  const sale = await Sale.findByIdAndRemove(req.params.id)
  if(!sale) return res.status(400).send("Wrong ID or this sale doesn't exist")
  res.send(sale)
})

module.exports.saleRouter = router
