const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/users', (req, res, next) => {
  // User.find()
  //   .then(usersFromDb => {
  //     console.log("DEBUG USERS -->", users)
  //     console.log("DEBUG usersFromDb -->", usersFromDb)
  res.render('users')
  // {
  // "users": usersFromDb
  // });
  // })
});

// $("#username").keyup(function (event) {
//   if (event.keyCode === 13) {
//     $("#browse").click();
//   }
//   console.log($("#username").value)
// });



module.exports = router;