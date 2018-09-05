const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Wish = require("../models/Wish");
const ensureLogin = require("connect-ensure-login");
const mongoose = require("mongoose");
// const users = require("/users");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// route to show the about page:
router.get("/about", (req, res, next) => {
  res.render("about");
});

//route to show the user-profile and connect to the wish list from DB
router.get(
  "/user-profile",
  ensureLogin.ensureLoggedIn("/auth/login"),
  (req, res) => {
    Wish.find({ _owner: req.user._id }).then(wishes => {
      console.log("------- WISHES ------", wishes);
      res.render("user-profile", { wishes });
    });
  }
);

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

router.get(
  "/users",
  ensureLogin.ensureLoggedIn("/auth/login"),
  (req, res, next) => {
    if (req.query.search && req.query.search !== "") {
      User.find({ username: new RegExp(req.query.search, "i") }).then(users => {
        if (req.isAuthenticated()) {
          res.render("users", { users });
        } else {
          res.redirect("/auth/login");
        }
      });
    } else {
      res.render("users", {
        message: "Search for a user using the search bar"
      });
    }
  }
);

router.get(
  "/users/:id/wishlist",
  ensureLogin.ensureLoggedIn("/auth/login"),
  (req, res, next) => {
    Wish.find({ _owner: req.params.id })
      .populate("_owner")
      .then(wishlists => {
        let username = wishlists[0]._owner.username;
        console.log("WISHKISTS ---->", wishlists);
        if (req.isAuthenticated()) {
          res.render("wish-list", { wishlists, username });
        } else {
          res.redirect("/auth/login");
        }
      });
  }
);

module.exports = router;
