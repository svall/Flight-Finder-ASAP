const fetch = require('node-fetch');

const API_FLIGHTURL = 'https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?';
const API_FLIGHTKEY = process.env.API_AMADKEY;

//&origin=NYC&departure_date=2016-10-27&duration=3&max_price=300
//apikey=qwCUXWer0EOl6RyG6K3X7FFzYc8tctry
//&origin=NYC
//&departure_date=2016-10-27
//&duration=3&
//max_price=300
//&origin=NYC&departure_date=2016-10-28&duration=2&max_price=300

function searchFlights(req, res, next) {
  console.log(req.query.origin);
  fetch(`${API_FLIGHTURL})apikey=${API_FLIGHTKEY}&origin=NYC&departure_date=2016-10-28&duration=2&max_price=300`)
  // fetch(`${API_FLIGHTURL})apikey=${API_FLIGHTKEY}&origin=${req.query.origin}&departure_date=${req.query.departure_date}&duration=${req.query.duration}&max_price=${req.query.max_price}`)
  .then((resdata) => {
    // console.log('this is services resdata', resdata);
    res.results = resdata.results;
    next();
  })
}

module.exports = { searchFlights };

