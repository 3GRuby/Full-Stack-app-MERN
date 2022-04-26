const express = require('express')
const app = express()
const products = require('./data/products')

const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/products', (req, res) => {
    res.json(products)
  })

  app.get('/api/product/:id', (req, res) => {
      const product = products.find(p=>p._id === req.params.id)
    res.json(product)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})