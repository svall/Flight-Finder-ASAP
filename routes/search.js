const router = require('express').Router();
const { authenticate } = require('../lib/auth');
const { searchFlights } = require('../services/flights');
const { saveFlight, displaySavedFlights } = require('../models/flights');

router.get('/search', searchFlights, (req, res) => {
  // console.log(res.results);
  res.render('./search', {
    flights: res.flightresults,
    origin: res.origin,
    price: res.price,
  })
})

router.post('/history', /*authenticate,*/ saveFlight, (req, res) => {
  res.redirect('./history');
})


module.exports = router;
