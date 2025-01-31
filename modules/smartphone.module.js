const mongoose = require("mongoose")

const smartphoneSchema = new mongoose.Schema({
    brand:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    releaseYear:{
        type:Number,
        required:true
    },
    operatingSystem:{
        type:String,

    },
    displaySize:String,
    storage:String,
    ram:String,
    cameraSpecs:Object,
    batteryCapacity:String,
    connectivity:Array,
    price:Number,
    colorsAvailabe:Array,
    features:Array
},{
    timestamps:true
})

const Smartphone = mongoose.model("Smartphone",smartphoneSchema)
module.exports = Smartphone