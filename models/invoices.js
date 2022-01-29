const mongoose = require("mongoose")
const { Product } = require("./products")
const invoiceSchema = new mongoose.Schema({
  product: {
    type: new Product({
      name: {
        type: String
      },
      quantity: Number,
      price: Number,
      subtotal: {
        type: Number,
        default: function(){
        return this.quantity * this.price
      }}
    })
  },
  //totalPrice,
  dateSale: Date.now,



})