const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    id: Number,
    dob: String,
    mail: String,
    telNo: Number ,
    address: String,
}) 

const Employee = mongoose.model("EmployeeCard" , employeeSchema)

module.exports = Employee