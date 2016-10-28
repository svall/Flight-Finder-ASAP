/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const router = require('express').Router();
const { createUser } = require('../models/users.js');
const { authenticate } = require('../lib/auth');


// Creates a new user by handling the POST request from a form with action `/users`
// It uses the createUser middleware from the user model

router.post('/', createUser, (req, res) => {
  res.redirect('/');
})

router.get('/profile', authenticate, (req, res) => {
  res.render('./users/profile');
})

module.exports = router;
