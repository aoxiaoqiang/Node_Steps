const express = require('express');
const app = express();

const config = require('./config/config');
const port = 3000;


app.get('/', (req, res) =>{
  res.json(config);
})




app.listen(port, () => console.log(`Server is running at http://127.0.0.1:${port}`))