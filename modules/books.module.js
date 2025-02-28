const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author: {
        type: String,
        required: true,
    },
    publishedYear: {
        type:Number,
        required: true,
    },
    genre:[{
            type: String,
            enum:["Fiction" ,"Non-Fiction","Non-fiction",'Autobiography',"Mystery","Thriller","Science Fiction","Fantasy","Romance","Historical","Biography","Self-help","Other","Business"],
        },],
        language: {
            type:String,
            required:true,
        },
        country:{
            type:String,
            default:"United States"
        },
        rating: {
            type:Number,
            min: 0,
            max:10,
            default:0,
        },
        summary:String,
        coverImageUrl:String,


},{
    timestamps:true
})

const Books = mongoose.model("Book",bookSchema)

module.exports = Books