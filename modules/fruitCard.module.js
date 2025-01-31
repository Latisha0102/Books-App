const mongoose  = require("mongoose");

const fruitCard = new mongoose.Schema({
    fruitImg: String,
    fruitName: String,
    fruitInfo: String,
calories: Number,
carbohydrates:Number,
protein:Number,
fat:Number


})

const Fruit = mongoose.model("Fruit",fruitCard)

module.exports = Fruit