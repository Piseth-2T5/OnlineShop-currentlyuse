const mongoose = require("mongoose")
const Joi = require("joi")

const User =  mongoose.model("User",new mongoose.Schema({
  username: {
    type: String, 
  }, 
  email: {
    type: String, 
    unique: true,
  },
  password: {
    type: String,

  }
}));

function validate(user){
  return Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }).validate(user)
}

module.exports.User = User
module.exports.validate = validate