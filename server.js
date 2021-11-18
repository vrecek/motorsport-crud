const express = require('express');
const app = express();
const dummy = [
   {
      title: "title1",
      desc: "desc1"
   },
   {
      title: "title1",
      desc: "desc1"
   },
   {
      title: "title1",
      desc: "desc1"
   },
   {
      title: "title1",
      desc: "desc1"
   }
]

app.use(express.json());

app.get('/', (req,res) => {
   res.json(dummy);
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`Server started at port ${PORT}`)})