const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  img: String,
  price: {type: Number, minimum: 1},
  qty: {type: Number, minimum: 1},
  readyToShip: Boolean
})

const Plants = mongoose.model('Plants', plantSchema)

module.exports = Plants
