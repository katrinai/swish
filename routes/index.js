const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Wish = require("../models/Wish");
const ensureLogin = require("connect-ensure-login");
const mongoose = require("mongoose");
const Grab = require("../models/Grab");
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

router.post("/wishes/new", (req, res, next) => {
  // TO DO: wishes/new wird eigentlich nicht benötigt
  res;
  //let { name, picture, description, comment, priceRange, endDate } = req.body;
  console.log("DEBUG req.user", req.user._id);
  Wish.create({
    name: req.body.name,
    picture: req.body.picture,
    description: req.body.description,
    _owner: mongoose.Types.ObjectId(req.user._id), //important! most of the time use this with "ensureLoggedIn"
    comment: req.body.comment,
    priceRange: req.body.priceRange,
    endDate: req.body.endDate
  }).then(newWish => {
    res.redirect("/user-profile");
  });
});

router.get("/wishes/:id/delete", (req, res, next) => {
  Wish.findByIdAndRemove(req.params.id).then(deleted => {
    res.redirect("/user-profile");
  });
});

router.get("/wishes/:id/edit", (req, res, next) => {
  Wish.findByIdAndUpdate(req.params.id).then(edited => {
    res.redirect("/user-profile");
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
        console.log("WISHLISTS ---->", wishlists);
        if (req.isAuthenticated()) {
          res.render("wish-list", { wishlists, username });
        } else {
          res.redirect("/auth/login");
        }
      });
  }
);

router.get("/wishes/:wishId/grab", (req, res, next) => {
  Wish.findByIdAndUpdate(
    req.params.wishId,
    { grabbed: true },
    { new: true }
  ).then(updatedWish => {
    Grab.create({
      _grabber: req.user._id,
      _wish: updatedWish._id
    });
    res.redirect("/friends-wish-list");
  });
});

router.get("/friends-wish-list", (req, res) => {
  Grab.find({ _grabber: req.user._id })
    .populate("_wish")
    .then(grabs => {
      res.render("friends-wish-list", { grabs });
    });
});

module.exports = router;
