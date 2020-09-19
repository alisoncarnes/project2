const express = require('express')
const Plants = require('../models/plants.js')
const plants = express.Router()

// SHOP PLANTS ROUTE
plants.get('/plants' , (req, res) => {
  res.render('/shop_plants.ejs');
});

// INDEX
plants.get('/', (req, res) => {
    Plants.find({}, (err, allPlants)=>{
      res.render('index.ejs', {
        plants: allPlants
    })
  })
})

module.exports = plants
