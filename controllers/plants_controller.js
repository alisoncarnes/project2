const express = require('express')
const Plants = require('../models/plants.js')
const plants = express.Router()

//SHOP PLANTS ROUTE
plants.get('/plants' , (req, res) => {
  res.render('perennial/shop_plants.ejs');
});

// INDEX
plants.get('/', (req, res) => {
    res.render('perennial/index.ejs', {
  })
})

module.exports = plants
