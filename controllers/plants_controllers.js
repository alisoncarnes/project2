const express = require('express')
const Plants = require('../models/plants.js')
const plants = express.Router()

//SHOP PLANTS ROUTE
app.get('/plants' , (req, res) => {
  res.render('shop_plants.ejs');
});


module.exports = plants
