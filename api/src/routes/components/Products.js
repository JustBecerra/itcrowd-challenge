const express = require('express')
const router = express.Router();
const { Product } = require('../../db.js')
const { Op } = require("sequelize");

router.get('/', async(req, res) => {
  try{
    let localP = await Product.findAll()
    return res.status(200).json(localP)
  }catch(err){
    return res.send(err.message)
  }
})

router.get('/:id', async(req, res) => {
  const {id} = req.params;
  try{
    const localProd = await Product.findOne({
      where: {id: {[Op.eq]: id}},
    })

    if(localProd){
      return res.json(localProd)
    }else{
      return res.status(404).send('dicho producto no existe')
    }
  }catch(err){
    return res.send(err.message)
  }
})

router.post('/', (req, res) => {
    const {name, description, image_url, price} = req.body
    try{
      const newProd = Product.create({
        name: name,
        description: description,
        image_url: image_url,
        price: price,
      })
      
      return res.json(newProd)
    }catch(err){
      return res.send(err.message)
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try{
        // const deleteProd = await Product.destroy({
        //   where: {id: {[Op.eq]: id}},
        // })
        const deleteProd = await Product.destroy({
          where: {id: [id]},
        })
        
        return res.json(deleteProd)
    }catch(err){
        return res.send(err.message)
    }
})

module.exports = router