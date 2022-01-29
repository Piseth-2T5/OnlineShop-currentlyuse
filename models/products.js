const categorySchema = require("./categories")
const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
  name:
      {   
        type: String,
        minlength: 3,
        maxlength: 15,
        required: true
      },
  category: 
      {
        type: categorySchema,
        required: true 
      },
  price: 
      { 
        type: Number, 
        required: true, 
        min: 0 
      },
  inStock: 
      { 
        type: Number, 
        min: 0,
        required: true 
      },
  rate: 
      { 
        type: Number,
        default: 0, 
        min: 0, 
        max: 10
      },
  date:  
      { 
        type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);


module.exports.Product = Product