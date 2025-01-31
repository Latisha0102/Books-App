const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
    cardCompany: String,
    cardNumber: Number,
    cardExpiration: String,
    cardOwnerName: String,
})

const CreditCard = mongoose.model("CreditCard",cardSchema)

module.exports = CreditCard