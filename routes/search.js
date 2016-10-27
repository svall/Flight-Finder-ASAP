const router = require('express').Router();
const { searchFlights } = require('../services/flights');

router.get('/search', searchFlights, (req, res) => {
  console.log(res.results);
  res.render('search', {
    flights: res.results,
  })
})


module.exports = router;
