const router = require('express').Router();
// const { authenticate } = require('../lib/auth');
const { displaySavedFlights, deleteSavedFlight, editSavedFlights } = require('../models/flights');

router.get('/history', /*authenticate,*/ displaySavedFlights, (req, res) => {
  // console.log(res.savedflights);
  res.render('./history', {
    savedFlights: res.savedflights,
  })
})

router.put('/history/:id', editSavedFlights, (req, res) => {
  res.redirect('/history')
})

router.delete('/history/:id', deleteSavedFlight, (req, res) => {
  res.redirect('/history')
})

module.exports = router;
