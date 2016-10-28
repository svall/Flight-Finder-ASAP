const router = require('express').Router();
const { displaySavedFlights, deleteSavedFlight, editSavedFlights } = require('../models/flights');

router.get('/search/history', displaySavedFlights, (req, res) => {
  // console.log(res.savedflights);
  res.render('./history', {
    savedFlights: res.savedflights,
  })
})

router.put('/search/history/:id', editSavedFlights, (req, res) => {
  res.redirect('/search/history')
})

router.delete('/search/history/:id', deleteSavedFlight, (req, res) => {
  res.redirect('/search/history')
})

module.exports = router;
