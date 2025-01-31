const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    imgUrl: String,
  productName: String,
  productCategory: String,
  productInfo: String,
  productColor: String,
  productSize: Number,
  productPrice: Number
})

const Cart = mongoose.model('Cart' ,cartSchema)

module.exports = Cart