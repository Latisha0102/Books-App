const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    imgUrl: String,
  productName: String,
  productFeatures: Array,
  productRatings: Number,
  productReviews: Number,
  productQuantity: Number,
  productPrice: Number,
  delivery: Boolean,
  discount:Number
})

const Product = mongoose.model('Product' ,productSchema)

module.exports = Product