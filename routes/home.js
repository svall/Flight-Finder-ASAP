const router = require('express').Router();
const userModel = require('../models/users');

router.get('/home', (req, res) => {
  res.render('./home', {
    intro: "<username here>",
    // intro2: intro,
  });
})

module.exports = router;
