const mongoose = require("mongoose");
const Wish = require("../models/Wish");
const User = require("../models/User");
const wishes = require("../data/wishes");
const bcrypt = require("bcrypt");

const salt = 10;

mongoose
  .connect(
    "mongodb://localhost/swish",
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

let password = "jessica";
let saltRound = bcrypt.genSaltSync(salt);
let pass = bcrypt.hashSync(password, saltRound);

let user1 = new User({
  username: "jessica",
  password: pass
});

password = "katrin";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user2 = new User({
  username: "katrin",
  password: pass
});

let users = [user1, user2];

// ordnet randommäßig wishes zu owner zu
let wishesToCreate = wishes.map(wish => {
  let randomNum = Math.floor(Math.random() * 2);
  wish._owner = users[randomNum];
  return wish;
});

console.log("WISHES --> ", wishesToCreate);

Wish.deleteMany()
  .then(() => {
    return User.deleteMany();
  })
  .then(() => {
    console.log("All wishes and users deleted");
    return Wish.create(wishesToCreate);
  })
  .then(newWishes => {
    console.log(newWishes);
    console.log(newWishes.length + " new wishes created");
    return Promise.all([user1.save(), user2.save()]);
  })
  .then(([users]) => {
    console.log(users);
    mongoose.disconnect();
  });
