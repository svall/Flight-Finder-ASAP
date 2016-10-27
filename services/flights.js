const fetch = require('node-fetch');

const APIFLIGHT_URL = `https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search`;
const APIFLIGHT_KEY = process.env.APIAMAD_KEY;

//&origin=NYC&departure_date=2016-10-28&duration=2&max_price=300

function searchFlights(req, res, next) {
  console.log(`this is the key ==========${APIFLIGHT_KEY}`);
  // fetch(`${APIFLIGHT_URL}?apikey=${APIFLIGHT_KEY}&origin=NYC&departure_date=2016-10-28&duration=2&max_price=300`)
  fetch(`${APIFLIGHT_URL})apikey=${APIFLIGHT_KEY}&origin=${req.query.origin}&departure_date=${req.query.departure_date}&duration=${req.query.duration}&max_price=${req.query.max_price}`)
  .then(data => data.json())
  .then((data) => {
    console.log('this is services', data);

    res.results = data;
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  })
}

module.exports = { searchFlights };

