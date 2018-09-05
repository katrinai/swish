const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Wish = require("../models/Wish");
const ensureLogin = require("connect-ensure-login");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// route to show the about page:
router.get("/about", (req, res, next) => {
  res.render("about");
});

// router to users
// router.get("/users", (req, res, next) => {
//   User.find().then(usersFromDb => {
//     res.render("users", {"users: usersFromDb"});
//   });
// });

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

module.exports = router;
