const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o App
const app = express()

// Iniciando o DB
mongoose.connect(
  'mongodb://localhost:27017/nodeapi', 
  { useNewUrlParser: true }
  )

require('./src/models/Products')

const Product = mongoose.model('Product')

// Rotas
app.get('/', (req,res) => {
  Product.create({
    title: 'React Nativo',
    description: 'Build os trecos ai',
    url: 'https://github.com/facebook/react-native'
  })

  res.send('Hello 3')
})

app.listen(3005)