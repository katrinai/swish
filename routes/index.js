const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Wish = require("../models/Wish");
const ensureLogin = require("connect-ensure-login");
const mongoose = require("mongoose");
const uploadCloud = require('../config/cloudinary.js');
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
      res.render("user-profile", { wishes, user: req.user });
    });
  }
);

router.post("/wishes/new", uploadCloud.single('picture'), (req, res, next) => {
  res;
  //let { name, picture, description, comment, priceRange, endDate } = req.body;
  console.log("DEBUG req.user", req.user._id);
  const imgPath = req.file.url;
  const imgName = req.file.originalname;
  Wish.create({
    name: req.body.name,
    picture: imgPath,
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


// GET /wishes/5b9127c28bb96c0d1d7c1b6d/edit
router.get("/wishes/:id/edit", (req, res, next) => {
  Wish.findById(req.params.id).then(wish => {
    res.render("wish-edit", {
      wish: wish
    });
  });
});

router.post("/wishes/:id/edit", uploadCloud.single('picture'), (req, res, next) => {
  if (req.file) {
    console.log("REQ file --->", req.file)
  } else {
    console.log("WE DON#T HAVE A FILE")
  }
  Wish.findById(req.params.id).then(wish => {
    // the updated values
    wish.name = req.body.name;
    wish.picture = req.file ? req.file.url : wish.picture;
    wish.description = req.body.description;
    wish.comment = req.body.comment;
    wish.priceRange = req.body.priceRange;
    wish.endDate = req.body.endDate;
    wish.save()
      .then(updated => {
        res.redirect("/user-profile");
      })
  })
})

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
