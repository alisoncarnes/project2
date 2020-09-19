const express = require('express')
const Plants = require('../models/plants.js')
const plantSeed = require('../models/plant_seed.js')
const plants = express.Router()

// SHOP PLANTS ROUTE
// plants.get('/plants' , (req, res) => {
//   res.render('perennial/plants.ejs');
// });

plants.delete('/:id', (req, res)=>{
  Plants.findByIdAndRemove(req.params.id, (err, deletedPlants)=>{
    res.redirect('/home')
  })
})

//SEED
plants.get("/home/plants/seed", (req, res) => {
  Products.deleteMany({}, ()=> {});
  Products.create(productSeed, (error, data) => {
    error ? res.status(400).json(error) : res.status(200).json(data);
  });
})

// SHOW ROUTE

plants.get('/:id', (req, res)=>{
  Plants.findById(req.params.id, (err, foundPlant)=>{
    res.render('plants/show.ejs', {
      plants: foundPlant
    })
  })
})

// INDEX
plants.get('/', (req, res) => {
    Plants.find({}, (err, allPlants)=>{
      res.render('plants/index.ejs', {
        plants: allPlants
    })
  })
})

//SEED Routes


module.exports = plants
