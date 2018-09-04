const express = require("express");
const about = require("about");

// route to show the about page:
router.get("/about", (req, res, next) => {
  res.render("about");
});
