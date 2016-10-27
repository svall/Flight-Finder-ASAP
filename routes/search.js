const router = require('express').Router();
const { searchFlights } = require('../services/flights');
const { saveFlight } = require('../models/flights');

router.get('/search', searchFlights, (req, res) => {
  // console.log(res.results);
  res.render('./search', {
    flights: res.flightresults,
    origin: res.origin,
  })
})

router.post('/search/save', saveFlight, (req, res) => {
  res.redirect('/');
})

module.exports = router;
