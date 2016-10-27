const router = require('express').Router();
const { displaySavedFlights, deleteSavedFlight } = require('../models/flights');

router.get('/search/history', displaySavedFlights, (req, res) => {
  console.log(res.savedflights);
  res.render('./history', {
    savedFlights: res.savedflights,
  })
})

router.delete('/search/history/:id', deleteSavedFlight, (req, res) => {
  res.redirect('/search/history')
})

module.exports = router;
