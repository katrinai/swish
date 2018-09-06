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
  picture: "https://media.licdn.com/dms/image/C4E03AQE9XzbC5-vWag/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=Smj1OxE2FdJiZ6hBsumsC5G7qEqOw4I8dI4UtD3X5jk",
  password: pass
});

password = "katrin";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user2 = new User({
  username: "katrin",
  picture: "https://media.licdn.com/dms/image/C4E03AQG-Kgdy-l2SPQ/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=VV2WvP4xNfhFicP8CKx1tP4_OK3OahL2nbxu7EpbIKw",
  password: pass
});

password = "ojuna";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user3 = new User({
  username: "ojuna",
  picture: "https://media.licdn.com/dms/image/C4D03AQHtSp-UOML11A/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=TttroD578dRuYZrAr0MzGgjVC87gVd4_QPS7O8FPI74",
  password: pass
});

password = "carla";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user4 = new User({
  username: "carla",
  picture: "https://media.licdn.com/dms/image/C4D03AQGOtJLjuaB5WA/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=KxZyzNcVHK8eubPiWWkuxlAd2SGMHCOLelLxxWKUZiU",
  password: pass
});

password = "nhan";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user5 = new User({
  username: "nhan",
  picture: "https://media.licdn.com/dms/image/C5603AQEk7tdH8GxaZg/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=TAil6GbykK_FmQC6-ah8u-iCM0M338L1kuvdyT-dO2Y",
  password: pass
});

password = "ana";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user6 = new User({
  username: "ana",
  picture: "https://media.licdn.com/dms/image/C4D03AQF14YTSZdknFQ/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=8m7zwMDfylicniyVy7pc3miv12A5u_Vzs_k4TArz1xE",
  password: pass
});

password = "jen";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user7 = new User({
  username: "jen",
  picture: "https://media.licdn.com/dms/image/C4D03AQGOtJLjuaB5WA/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=KxZyzNcVHK8eubPiWWkuxlAd2SGMHCOLelLxxWKUZiU",
  password: pass
});

password = "anita";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user8 = new User({
  username: "anita",
  picture: "https://media.licdn.com/dms/image/C4E03AQE9XzbC5-vWag/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=Smj1OxE2FdJiZ6hBsumsC5G7qEqOw4I8dI4UtD3X5jk",
  password: pass
});

password = "kash";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user9 = new User({
  username: "kash",
  picture: "https://media.licdn.com/dms/image/C4D03AQGOtJLjuaB5WA/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=KxZyzNcVHK8eubPiWWkuxlAd2SGMHCOLelLxxWKUZiU",
  password: pass
});

password = "yolo - kash´s dog";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user10 = new User({
  username: "yolo - kash´s dog",
  password: pass
});

password = "flo";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user11 = new User({
  username: "flo",
  picture: "https://media.licdn.com/dms/image/C5603AQHTCaMv3-SF8A/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=KQGB_7CXz6b2033pRAnIRaNQ1G7ypwGSGqr_372nv78",
  password: pass
});

password = "alina";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user12 = new User({
  username: "alina",
  picture: "./public/images/Alina.png",
  password: pass
});

password = "samuele";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user13 = new User({
  username: "samuele",
  picture: "https://media.licdn.com/dms/image/C4D03AQG6y45MGTq2cQ/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=s9hae6Ct0PRMQCilj8vT2DW6B0I9CbobkaqiPBo5-S8",
  password: pass
});

password = "bhavana";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user14 = new User({
  username: "bhavana",
  picture: "./public/images/bhavana.png",
  password: pass
});

password = "dalina";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user15 = new User({
  username: "dalina",
  picture: "https://media.licdn.com/dms/image/C4D03AQHDqHEzIqKL9g/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=j-Sa8n6ZzBMMVH54Vtgec2yICQfltTrZ__VfyDhOGV0",
  password: pass
});

password = "tormod";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user16 = new User({
  username: "tormod",
  picture: "./public/images/tormod.png",
  password: pass
});

password = "markus";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user17 = new User({
  username: "markus",
  picture: "https://media.licdn.com/dms/image/C4E03AQFX5FV3adgmPg/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=8WhD1ILYLw1O08x6Y8MUAVQ8Jgmx7-2NYkIRMuudP0E",
  password: pass
});

password = "tim";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user18 = new User({
  username: "tim",
  picture: "https://media.licdn.com/dms/image/C5603AQHcZVcP4-bAEA/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=A0IC53-wE-Lv48gUstrL93QV9Yxo8WAGyEY4P5XZ87k",
  password: pass
});

password = "silvio";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user19 = new User({
  username: "silvio",
  picture: "https://media.licdn.com/dms/image/C4D03AQEleGZdjdATjQ/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=pVS6x0e40oskAnFA6NbOduWuYo9FrAbad8_6KsBA3GU",
});

password = "maxence";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user20 = new User({
  username: "maxence",
  picture: "./public/images/maxence.png",
});

password = "nicole";
saltRound = bcrypt.genSaltSync(salt);
pass = bcrypt.hashSync(password, saltRound);

let user21 = new User({
  username: "nicole",
  picture: "https://media.licdn.com/dms/image/C4D03AQGAONNRvf0_Qw/profile-displayphoto-shrink_800_800/0?e=1541635200&v=beta&t=BheafRWpDAUgmhy77J9mi_e0k3TiAmA2LJ7hNtAztCY",
  password: pass
});


let users = [user1, user2];

// ordnet randommäßig wishes zu owner zu
let wishesToCreate = wishes.map(wish => {
  let randomNum = Math.floor(Math.random() * 13);
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
    return Promise.all([user1.save(), user2.save(), user3.save(), user4.save(), user5.save(), user6.save(), user7.save(), user8.save(), user9.save(), user10.save(), user11.save(), user12.save(), user13.save(), user14.save(), user15.save(), user16.save(), user17.save(), user18.save(), , user19.save(), user20.save(), user21.save()]);
  })
  .then(([users]) => {
    console.log(users);
    mongoose.disconnect();
  });
