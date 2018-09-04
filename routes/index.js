const express = require("express");
const router = express.Router();
const User = require("../models/User");
// const Wish = require("../models/Wish");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
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

// route to show the about page:
router.get("/about", (req, res, next) => {
  res.render("about");
});

module.exports = router;
