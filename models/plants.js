const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: String,
  img: String,
  price: {type: Number, minimum: 1},
  petFriendly: Boolean,
  light: String,
  water: String,
  description: String,
  qty: {type: Number, minimum: 1}

})

const Plants = mongoose.model('Plants', plantSchema)

module.exports = Plants
