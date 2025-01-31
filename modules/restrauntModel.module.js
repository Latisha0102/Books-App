const mongoose = require("mongoose")

const restrauntModel = new mongoose.Schema({
    name:{
        type:String,
    required:true},
    cuisine: [{
        type: String,
        enum: ["Indian", "Chinese", "Italian", "Mexican", 'American', 'French', 'Japanese', 'Mediterranean', 'Thai', 'Vegetarian', 'Vegan','Other'],
}],
location:{
    type:String,
    required:true
},
owner:{
    type:String,
    required:true
},
phone: String,
website:String,
openingYear:Number,
rating:{
    type:Number,
    min:0,
    max:5,
    default:0
},
specialDishes:Array,
photoUrls:Array,
},
{
    timestamps:true
})

const Restaurant = mongoose.model("Restaurant",restrauntModel)

module.exports = Restaurant