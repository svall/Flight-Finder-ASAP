/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const router = require('express').Router();
const { createUser } = require('../models/users.js');
const { authenticate } = require('../lib/auth');
// const { userModel } = require('../models/users');

// Creates a new user by handling the POST request from a form with action `/users`
// It uses the createUser middleware from the user model

router.post('/users', createUser, (req, res) => {
  res.redirect('/');
})

/*
 * Takes the user to its profile by handling any GET request to `/users/profile`
 * It redirects to /login when attempted to be reached by a non logged in user
 * It is "protected" by the authenticate middleware from the auth library
 */
router.get('/home', authenticate, (req, res) => {
  res.render('./home', {
    user: res.user
  })
    console.log('this is the user in route ', res.user);
})

module.exports = router;
