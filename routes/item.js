const express = require('express');
const iiu = require('is-image-url');
const router = express.Router();
const Items = require('../models/Items');

router.get('/', async (req, res) => { // GET ALL
   try{
      const allPosts = await Items.find();
      res.json(allPosts);
   }catch(err){
      res.status(400).json({ ERROR: err.message, status: 400 });
   }
})

router.post('/', async (req, res) => { // ADD NEW
   try{
      if(!req.body.name || !req.body.mark || !req.body.src) throw new Error('All fields are required!');

      let verifyUrl = req.body.src;
      if(!iiu(req.body.src)) verifyUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';
      
      const it = new Items({
         mark: req.body.mark,
         name: req.body.name,
         src: verifyUrl,
         isFav: false
      })

      await it.save();
      res.redirect('http://localhost:3000/add-new');
   }catch(err){
      res.redirect(`http://localhost:3000/error?m=${err.message}&s=${400}`);
   }
})

router.delete('/:id', async (req, res) => { // DELETE
   try{
      await Items.deleteOne({
         _id: req.params.id
      })
      res.send(true);
   }catch(err){
      res.status(400).json({ ERROR: err.message, status: 400 });
   }
})

router.patch('/:id&:fav', async (req, res) => { // UPDATE CART
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

router.post('/edit/:id', async (req,res) => { // EDIT ITEM
   try{
      const search = await Items.findById(req.params.id);
      const found = [search.src, search.mark, search.name];
      const params = [req.body.src, req.body.mark, req.body.name];

      for(const [ind, val] of params.entries()){
         if(val && val != found[ind]){
            found[ind] = val;
         }
      }

      if( !iiu(found[0]) ) found[0] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png';

      await Items.updateOne(
         { _id: req.params.id },
         { $set: { src: found[0], mark: found[1], name: found[2] } }
      )

      res.redirect('http://localhost:3000/mod-prod');

   }catch(err){
      res.status(400).redirect('http://localhost:3000/error?m=${err.message}&s=${400}');
   }  
})

module.exports = router;