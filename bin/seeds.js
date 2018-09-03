const mongoose = require('mongoose');
const Entry = require('../models/User');

mongoose
  .connect('mongodb://localhost/swish', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let wishesToCreate = [
  {
    wish: "pillow"
  },
  {
    wish: "jacket"
  },
  {
    wish: "mug"
  },
  {
    wish: "sketch book"
  },
  {
    wish: "watch"
  },
  {
    wish: "sketch book"
  },
  {
    wish: "hip bag Berlin style"
  },
  {
    wish: "birthday cake"
  },
  {
    wish: "Gin"
  },
  {
    wish: "MacBook Pro"
  }
]

Wish.deleteMany()
  .then(() => Wish.create(wishesToCreate))
  .then(wishes => {
    console.log(wishes.length + ' wishes created')
    mongoose.disconnect()
  })
