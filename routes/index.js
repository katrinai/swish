const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Wish = require("../models/Wish");
// const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

/* GET home page */
router.get("/", (req, res, next) => {
  res.render(
    "index"
    // , {
    //   isConnected: req.isAuthenticated(),
    //   isAdmin: req.user && req.user.role === "ADMIN"
    // }
  );
});

// router to users, inclusive the check for the role
router.get("/users", (req, res, next) => {
  User.find().then(users => {
    res.render(users - list, { users });
  });
});

router.get("/wishes/new", (req, res, next) => {
  res.render("wishes-new");
});

router.post("/wishes/new", (req, res, next) => {
  console.log("DEBUG req.user", req.user);
  Wish.create({
    name: req.body.name,
    description: req.body.description,
    _owner: req.user._id //important! most of the time use this with "ensureLoggedIn"
  }).then(newWish => {
    res.redirect("/wishes/" + newWish._id);
  });
});

// can we use the function below for our price-filter?
// router.get("/wishes/:id", (req, res, next) => {
//   Wish.findById(req.params.id).then(wish => {
//     res.render("wishes-detail", { wish });
//   });
// });

// what is populate?
// router.get("/wishes", (req, res, next) => {
//   Room.find()
//     .populate("_owner")
//     .then(rooms => {
//       res.render("rooms", { rooms: rooms });
//     });
// });

// do we need this?
// Wish.findById(req.params.id).then(wish => {
//   if (
//     req.isAuthenticated() &&
//     (req.user.role === "ADMIN" ||
//       req.user._id.toString() === room._owner.toString())
//   ) {
//     res.render("wish-edit", { wish });
//   } else {
//     res.redirect("/auth/login");
//   }
// });

// // I have no idea what this function is supposed to do
// router.post("/rooms/:id/edit", checkRoles("ADMIN"), (req, res, next) => {
//   Room.findById(
//     req.params.id,
//     {
//       name: req.body.name,
//       description: req.body.description
//     },
//     { new: true }
//   ).then(room => {
//     res.redirect("/rooms/" + room._id);
//   });
// });

// do we want to check roles???
// function checkRoles(role) {
//   return function(req, res, next) {
//     if (req.isAuthenticated() && req.user.role === role) {
//       //"req." is often giving a true or false boolean
//       return next();
//     } else {
//       res.redirect("/auth/login");
//     }
//   };
// }

module.exports = router;
