const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title: String,
    content:String,
    category: {
        type:String,
        enum: ["Personal","Work","Study"],
    },
    tags:{
        type:Array
    }
},{
    timestamps: true
})

const Notes = mongoose.model("Note",notesSchema)

module.exports = Notes