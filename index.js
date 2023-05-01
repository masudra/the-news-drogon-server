const express = require('express')
const app = express()
const port = 5003
const cors =require('cors');

const cateagori = require('./Data/cateagori.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('hi ')
});
app.get('/cateagori', (req, res) => {
  res.send(cateagori)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})