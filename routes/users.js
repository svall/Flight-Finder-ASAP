/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const router = require('express').Router();
const { createUser } = require('../models/users.js');
const { authenticate } = require('../lib/auth');
const { userModel } = require('../models/users');
const { searchFlights } = require('../services/flights');
const { saveFlight } = require('../models/flights');
const { displaySavedFlights, deleteSavedFlight, editSavedFlights } = require('../models/flights');
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

router.get('/search', authenticate, searchFlights, (req, res) => {
  // console.log(res.results);
  res.render('./search', {
    user: res.user || [],
    flights: res.flightresults || [],
    origin: res.origin || [],
    price: res.price || [],
  })
})



router.post('/search/history', authenticate, saveFlight, (req, res) => {
  res.redirect('./history');
})


router.get('/history', authenticate, displaySavedFlights, (req, res) => {
  // console.log(res.savedflights);
  res.render('./history', {
    savedFlights: res.savedflights || [],
  })
})

router.put('/history/:id', editSavedFlights, (req, res) => {
  res.redirect('/history')
})

router.delete('/history/:id', deleteSavedFlight, (req, res) => {
  res.redirect('/history')
})



module.exports = router;
