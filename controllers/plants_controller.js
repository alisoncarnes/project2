const express = require('express')
const Plants = require('../models/plants.js')
const plants = express.Router()

// SHOP PLANTS ROUTE
// plants.get('/plants' , (req, res) => {
//   res.render('perennial/plants.ejs');
// });

// SHOW ROUTE

plants.get('/:id', (req, res)=>{
  Plants.findById(req.params.id, (err, foundPlant)=>{
    res.render('perrenial/show.ejs', {
      plants: foundPlant
    })
  })
})

// INDEX
plants.get('/', (req, res) => {
    Plants.find({}, (err, allPlants)=>{
      res.render('index.ejs', {
        plants: allPlants
    })
  })
})

//SEED Routes
plants.get('/setup/seed', (req, res)=>{
  Plants.create(
    [
      {
        name: 'Jade Pothos',
        size: 'Small',
        img: 'images/jadepothos.jpg',
        price: 30,
        petFriendly: false,
        light: 'Thrives on medium to low indirect light.',
        water: 'Water every 1-2 weeks, allowing soil to dry out
        between waterings.',
        qty: 20
      },
      {
        name: "Hoya Heart Plant",
        size: 'Extra Small',
        img: '/images/hoyaheart',
        price: 15,
        petFriendly: true,
        light: 'Thrives in bright direct light, but can
        tolerate bright indirect light.',
        water: 'Water every 3-4 weeks, allowing soil
        to dry out between waterings.',
        qty: 30

      },
      {
        name: 'Bird\'s Nest Fern',
        size: 'Medium',
        img: '/images/birdsnest.jpg',
        price: 25,
        petFriendly: true,
        light: 'Thrives in medium to bright indirect light.',
        water: 'Water weekly, allowing soil to dry out half way down
        between waterings.',
        qty: 15
      },
      {
        name: 'Parlor Palm',
        size: 'Small',
        img: '/images/parlorpalm.jpg',
        price: 32,
        petFriendly: true,
        light: 'Thrives in medium to bright indrect light.',
        water: 'Water every 1-2 weeks, allowing soil to dry out in
        between waterings.',
        qty: 5
      },
      {
        name: 'Ponytail Palm',
        size: 'Medium',
        img: '/images/ponytail.jpg',
        price: 40,
        petFriendly: false,
        light: 'Thrives in bright indirect to direct light.',
        water: 'Water every 2-3 weeks, allowing soil to dry out
        between waterings.',
        qty: 10
      },
      {
        name: 'Petite White Orcid',
        size: 'Extra Small',
        img: '/images/orchid.jpg',
        price: 52,
        petFriendly: true,
        light: 'Thrives in bright indirect light.',
        water: 'Water every week with 3-4 tablespoons of water,
        allowing potting to dry out between waterings.'
      }
    ]
  )
})
module.exports = plants
