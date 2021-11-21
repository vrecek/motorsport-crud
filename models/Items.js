const mongoose = require('mongoose');

const Schema = mongoose.Schema({
   mark: {
      type: String,
      required: true
   },

   name: {
      type: String,
      required: true
   },

   src: {
      type: String,
      required: true
   },

   isFav:{
      type: Boolean,
      required: true
   }
})

module.exports = mongoose.model('Items', Schema);