const fetch = require('node-fetch');

const APIFLIGHT_URL = `https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search`;
const APIFLIGHT_KEY = process.env.APIAMAD_KEY;

function searchFlights(req, res, next) {
  // console.log(`this is the key = ${APIFLIGHT_KEY}`);
  // fetch(`${APIFLIGHT_URL}?apikey=${APIFLIGHT_KEY}&origin=NYC&departure_date=2016-10-28&duration=2&max_price=300`)
  fetch(`${APIFLIGHT_URL}?apikey=${APIFLIGHT_KEY}&origin=${req.query.origin}&departure_date=${req.query.departure_date}&duration=${req.query.duration}&max_price=${req.query.max_price}`)
  .then(r => r.json())
  .then((data) => {
    // console.log('this is services', data.results[0].price);

    function calcTax() {
      const price = [];
      for (let i = 0; i < 5; i++) {
        let basePrice = data.results[i].price;
        let tax = 1.075;
        let pricecalc = basePrice * tax;
        let finalprice = pricecalc.toFixed(2);
        price.push(finalprice);
        // console.log('this is price NO tax ', basePrice);
        // console.log('this is price with tax ', pricecalc);
      }
      return price;
    }
    calcTax();
    res.flightresults = data.results;
    res.origin = data.origin;
    res.price = calcTax();
    console.log('this passes to routes ', res.price);
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  })
}

module.exports = { searchFlights };

