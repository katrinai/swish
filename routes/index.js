const express = require("express");
const router = express.Router();
const User = require("../models/User");
// const Wish = require("../models/Wish");


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});



// // can we use this for our search bar, in which we search for user?
// router.get("/users", (req, res, next) => {
//   User.find().then(users => {
//     res.render(users - list, { users });
//   });
// });

// later we can add ensureLoggedIn("/auth/login") here after "/wishes/new",:
// router.get("/wishes/new", (req, res, next) => {
//   res.render("wishes-new");
// });

// this is the route to add new wishes:
// later we can add ensureLoggedIn("/auth/login") here after "/wishes/new",:
// router.post("/wishes/new", (req, res, next) => {
//   console.log("DEBUG req.user", req.user);
//   Wish.create({
//     name: req.body.name,
//     description: req.body.description,
//     _owner: req.user._id //important! most of the time use this with "ensureLoggedIn"
//   }).then(newWish => {
//     res.redirect("/wishes/" + newWish._id);
//   });
// });

// can we use the function below for our price-filter?
// router.get("/wishes/:id", (req, res, next) => {
//   Wish.findById(req.params.id).then(wish => {
//     res.render("wishes-detail", { wish });
//   });
// });

// what is populate? this example is taken from another exercise:
// router.get("/wishes", (req, res, next) => {
//   Room.find()
//     .populate("_owner")
//     .then(rooms => {
//       res.render("rooms", { rooms: rooms });
//     });
// });

module.exports = router;
