const router = require('express').Router();
const { displaySavedFlights } = require('../models/flights');


router.get('/search/history', displaySavedFlights, (req, res) => {
  console.log(res.savedflights);
  res.render('./history', {
    savedFlights: res.savedflights,
  })
})

module.exports = router;
