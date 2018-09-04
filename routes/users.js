const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res, next) => {
  User.find()
    .then(usersFromDb => {
      console.log(usersFromDb)
      res.render('users', {
        "users": usersFromDb
      });
    })
    .catch
});



module.exports = router;
