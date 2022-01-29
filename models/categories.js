const Joi = require("joi")
const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 3,
    maxlength: 15
  }
})

const Category = mongoose.model("Category", categorySchema)

function validateCategory(category){
  return Joi.object({
    name: Joi.string.min(3).max(15).required()
  }).validate(category)
}

module.exports.Category = Category
module.exports.categorySchema = categorySchema
module.exports.validateCategory = validateCategory