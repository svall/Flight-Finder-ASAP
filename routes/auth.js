/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const router = require('express').Router();
const { logIn } = require('../lib/auth');

/*
 * Log In and if successful assign res.user._id to the session
 * It uses the logIn middleware from the auth library to parse the form inputs
 * and save the user to the database
 */

router.post('/', logIn, (req, res) => {
  res.redirect('./history');
})

router.delete('/', (req, res) => {
  req.session.userId = null;
  res.redirect('/');
})

module.exports = router;
