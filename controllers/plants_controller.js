const express = require('express')
const Plants = require('../models/plants.js')
// const plantSeed = require('../models/plant_seed.js')
const plants = express.Router()

//NEW
plants.get('/new', (req, res)=>{
  res.render(
    'plants/new.ejs'
    , {currentUser: req.session.currentUser}
  )
})

//EDIT
plants.get('/:id/edit', (req, res)=>{
  Plants.findById(req.param.id, (err, foundPlant)=>{
    res.render('plants/edit.ejs',{
      plants: foundPlant
      ,currentUser: req.session.currentUser
    })
  })
})


//DELETE
plants.delete('/:id', (req, res)=>{
  Plants.findByIdAndRemove(req.params.id, (err, deletedPlant)=>{
    res.redirect('/plants')
  })
})


// SHOW ROUTE

plants.get('/:id', (req, res)=>{
  Plants.findById(req.params.id, (err, foundPlant)=>{
    res.render('plants/show.ejs', {
      plants: foundPlant
      ,  currentUser: req.session.currentUser
    })
  })
})

//UPDATE

plants.put('/:id', (req, res)=>{
  Plants.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true},
    (err, updatedModel)=>{
      res.redirect('/plants')
    }
  )
})

//CREATE

plants.post('/', (req, res)=>{
  Plants.create(req.body, (err, createdPlant)=>{
    res.redirect('/plants')
  })
})

//INDEX
plants.get('/', (req, res)=>{
  Plants.find({}, (err, allPlants)=>{
    res.render('plants/index.ejs', {
      plants: allPlants
      // ,currentUser: req.session.currentUser
    })
  })
})


//SEED Routes
plants.get('/setup/seed', (req,res)=>{
  Plants.create(
  [
    {
      name: 'Jade Pothos',
      size: 'Small',
      img: 'https://i.ibb.co/vXh7S66/jadepothos.jpg',
      price: 30,
      petFriendly: false,
      light: 'Thrives on medium to low indirect light.',
      water: 'Water every 1-2 weeks, allowing soil to dry out between waterings.',
      qty: 20
    },
    {
      name: "Hoya Heart Plant",
      size: 'Extra Small',
      img: 'https://i.ibb.co/CsKhjgp/hoyaheart.jpg',
      price: 15,
      petFriendly: true,
      light: 'Thrives in bright direct light, but can tolerate bright indirect light.',
      water: 'Water every 3-4 weeks, allowing soil to dry out between waterings.',
      qty: 30

    },
    {
      name: 'Bird\'s Nest Fern',
      size: 'Medium',
      img: 'https://i.ibb.co/qY8tCLG/birdnest.jpg',
      price: 25,
      petFriendly: true,
      light: 'Thrives in medium to bright indirect light.',
      water: 'Water weekly, allowing soil to dry out half way down between waterings.',
      qty: 15
    },
    {
      name: 'Parlor Palm',
      size: 'Small',
      img: 'https://i.ibb.co/mcbmqVD/the-sill-parlor-palm-variant-small-grant-cream-540x.jpg',
      price: 32,
      petFriendly: true,
      light: 'Thrives in medium to bright indrect light.',
      water: 'Water every 1-2 weeks, allowing soil to dry out in between waterings.',
      qty: 5
    },
    {
      name: 'Ponytail Palm',
      size: 'Medium',
      img: 'https://i.ibb.co/kgSR6YL/the-sill-ponytail-palm-variant-grant-terracotta-540x.jpg',
      price: 40,
      petFriendly: false,
      light: 'Thrives in bright indirect to direct light.',
      water: 'Water every 2-3 weeks, allowing soil to dry out between waterings.',
      qty: 10
    },
    {
      name: 'Petite White Orchid',
      size: 'Extra Small',
      img: 'https://i.ibb.co/LQyW25X/the-sill-petite-white-orchid-variant-x-small-hyde-cream-540x.jpg',
      price: 52,
      petFriendly: true,
      light: 'Thrives in bright indirect light.',
      water: 'Water every week with 3-4 tablespoons of water, allowing potting to dry out between waterings.'
    }
],
(err, data)=>{
  res.redirect('/plants')
}
  )
})

module.exports = plants
