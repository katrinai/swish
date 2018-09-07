require("dotenv").config();

const mongoose = require("mongoose");
const Wish = require("../models/Wish");
const User = require("../models/User");
const wishes = require("../data/wishes");
const bcrypt = require("bcrypt");

const salt = 10;

mongoose
  .connect(
    process.env.MONGODB_URI
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
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247715/swish/Jessica.png",
  password: pass
});

password = "katrin";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user2 = new User({
  username: "katrin",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247715/swish/katrin.jpg",
  password: pass
});

password = "ojuna";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user3 = new User({
  username: "ojuna",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247714/swish/ojuna.jpg",
  password: pass
});

password = "carla";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user4 = new User({
  username: "carla",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247714/swish/carla.jpg",
  password: pass
});

password = "nhan";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user5 = new User({
  username: "nhan",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247714/swish/nhan.jpg",
  password: pass
});

password = "ana";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user6 = new User({
  username: "ana",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247713/swish/ana.jpg",
  password: pass
});

password = "jen";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user7 = new User({
  username: "jen",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247714/swish/jen.png",
  password: pass
});

password = "anita";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user8 = new User({
  username: "anita",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247713/swish/anita.jpg",
  password: pass
});

password = "kash";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user9 = new User({
  username: "kash",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247714/swish/kaschief.png",
  password: pass
});

password = "yolo - kash´s dog";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user10 = new User({
  username: "yolo - kash´s dog",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247715/swish/kashs_dog_placeholder.png",
  password: pass
});

password = "flo";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user11 = new User({
  username: "flo",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247714/swish/flo.jpg",
  password: pass
});

password = "alina";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user12 = new User({
  username: "alina",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247713/swish/alina.png",
  password: pass
});

password = "samuele";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user13 = new User({
  username: "samuele",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247715/swish/samuele.jpg",
  password: pass
});

password = "bhavana";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user14 = new User({
  username: "bhavana",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247714/swish/bhavana.png",
  password: pass
});

password = "dalina";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user15 = new User({
  username: "dalina",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247714/swish/dalina.jpg",
  password: pass
});

password = "tormod";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user16 = new User({
  username: "tormod",
  picture:
    "https://res.cloudinary.com/djfaky39y/image/upload/v1536247715/swish/tormod.png",
  password: pass
});

password = "markus";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user17 = new User({
  username: "markus",
  picture:
    "https://media.licdn.com/dms/image/C4E03AQFX5FV3adgmPg/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=8WhD1ILYLw1O08x6Y8MUAVQ8Jgmx7-2NYkIRMuudP0E",
  password: pass
});

password = "tim";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user18 = new User({
  username: "tim",
  picture:
    "https://media.licdn.com/dms/image/C5603AQHcZVcP4-bAEA/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=A0IC53-wE-Lv48gUstrL93QV9Yxo8WAGyEY4P5XZ87k",
  password: pass
});

password = "silvio";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user19 = new User({
  username: "silvio",
  picture:
    "https://media.licdn.com/dms/image/C4D03AQEleGZdjdATjQ/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=pVS6x0e40oskAnFA6NbOduWuYo9FrAbad8_6KsBA3GU",
  password: pass
});

password = "maxence";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user20 = new User({
  username: "maxence",
  picture: "./public/images/maxence.png",
  password: pass
});

password = "nicole";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user21 = new User({
  username: "nicole",
  picture:
    "https://media.licdn.com/dms/image/C4D03AQGAONNRvf0_Qw/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=BheafRWpDAUgmhy77J9mi_e0k3TiAmA2LJ7hNtAztCY",
  password: pass
});

let users = [
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  user10,
  user11,
  user12,
  user13,
  user14,
  user15,
  user16,
  user17,
  user18,
  user19,
  user20,
  user21
];

// ordnet randommäßig wishes zu owner zu
let wishesToCreate = [];
users.map(user => {
  let randomNum = Math.floor(Math.random() * wishes.length);
  console.log("================ " + randomNum + " =========================");
  let wish = wishes[randomNum];
  wish._owner = user._id;
  wishesToCreate.push(wish);
});

console.log("WISHES --> ", wishesToCreate);

Wish.deleteMany()
  .then(() => {
    return User.deleteMany();
  })
  .then(() => {
    return Promise.all([
      user1.save(),
      user2.save(),
      user3.save(),
      user4.save(),
      user5.save(),
      user6.save(),
      user7.save(),
      user8.save(),
      user9.save(),
      user10.save(),
      user11.save(),
      user12.save(),
      user13.save(),
      user14.save(),
      user15.save(),
      user16.save(),
      user17.save(),
      user18.save(),
      user19.save(),
      user20.save(),
      user21.save()
    ]);
  })
  .then(newUsers => {
    console.log(newUsers.length + " users created");
    return Wish.create(wishesToCreate);
  })
  .then(newWishes => {
    console.log(newWishes);
    console.log(newWishes.length + " new wishes created");
    mongoose.disconnect();
  });
