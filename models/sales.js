const mongoose = require("mongoose")
const Joi = require("joi")
const saleSchema = new  mongoose.Schema({
  costumer:{
    type: new mongoose.Schema({
        name: {
          type: String,
          minlength: 2,
          maxlength: 15,
          require: true
        }, 
        phoneNumber: {
          type: Number,
          minlength: 8,
          maxlength: 12,
          require: true
        }
    })
  },
  product: {
    type: new mongoose.Schema({
      name: {
        type: String,
        minlength: 3,
        maxlength: 15,
        required: true
      },
      price: 
      { 
        type: Number, 
        required: true, 
        min: 0 
      },
    })
  },
  selected: {
    type: Number, 
    min: 0,
    default: 1
  },
  dataSale: {
    type: Date,
    require: true,
    default: Date.now
  },
  cost: {
    type: Number,
    min: 0, 
    default: 0
    // default: async function(){
    //   return await this.product[price]* this.selected
    // }
  }
})

const Sale = mongoose.model("Sale", saleSchema)

function saleValidate(sale){
  return Joi.object({
    costumerId: Joi.string().required(),
    productId: Joi.string().required()
  }).unknown().validate(sale)
}

module.exports.saleSchema = saleSchema
module.exports.Sale = Sale
module.exports.saleValidate = saleValidate 
