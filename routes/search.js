const router = require('express').Router();
const { searchFlights } = require('../services/flights');

router.get('/', searchFlights, (req, res) => {
  res.render('./search', {
    flights: res.results || [],
  });
})


module.exports = router;
