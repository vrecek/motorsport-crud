const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DB, { useNewUrlParser: true }, () => { console.log('Connected to base') });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/items', require('./routes/item'));

app.get('/', (req,res) => {
   res.send('main page');
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`Server started at port ${PORT}`)})