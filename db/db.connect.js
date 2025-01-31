const mongoose = require('mongoose')
require("dotenv").config()
const mongouri = process.env.MONGODB

const initializeDatabase = async () => {
    await mongoose.connect(mongouri).then(()=> {
        console.log('connected to database')
    }).catch((error) => {
        console.log("Error connecting to database" ,error)
    })
}

module.exports = {initializeDatabase}