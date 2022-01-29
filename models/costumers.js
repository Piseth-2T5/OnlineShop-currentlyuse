const Joi = require("joi")
const mongoose = require('mongoose')

const costumerSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 15,
    require: true
  },
  email: {
    type: String,
    match: /.+\@.+\..+/,
    require: true
  },
  phoneNumber: {
    type: Number,
    minlength: 8, 
    require: true 
  }
})

const Costumer = mongoose.model("Costumer", costumerSchema)

function costumerValidate(costumer){
  return Joi.object({
    name: Joi.string().min(2).max(15).required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.number().min(8).required()
  }).validate(costumer)
}


module.exports.costumerSchema = costumerSchema
module.exports.Costumer = Costumer
module.exports.costumerValidate = costumerValidate