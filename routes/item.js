const express = require('express');
const router = express.Router();
const Items = require('../models/Items');

router.get('/', async (req, res) => {
   try{
      const allPosts = await Items.find();
      res.json(allPosts);
   }catch(err){
      res.status(400).json({ ERROR: err.message, status: 400 });
   }
})

router.post('/', async (req, res) => {
   const it = new Items({
      mark: req.body.mark,
      name: req.body.name,
      src: req.body.src
   })

   try{
      const savedItem = await it.save();
      res.send(savedItem);
   }catch(err){
      res.status(400).json({ msg: err.message });
   }
})

router.patch('/:id&:fav', async (req, res) => {
   try{
      const updateItem = await Items.updateOne(
         { _id: req.params.id },
         { $set: { isFav: req.params.fav } }
      );
      res.json(req.params.fav == 'true');
   }catch(err){
      res.status(400).json({ msg: err.message });
   }
})

module.exports = router;