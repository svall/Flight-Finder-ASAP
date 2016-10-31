// User template code was provided by instructors at General Assembly (https://git.generalassemb.ly/wdi-nyc-60/user_auth_itunes)
const MongoClient = require('mongodb');

// process.env.MONGOLAB_URI is DEPRECATED
// process.env.MONGODB_URI is needed for when we deploy to Heroku
const connectionURL = process.env.MONGOLAB_BRONZE_URI || 'mongodb://localhost/flight_search';
// const connectionURL = process.env.MONGODB_URI || 'mongodb://localhost/flight_search';
// const connectionURL = process.env.MONGOLAB_URI || 'mongodb://localhost/flight_search';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = { getDB };
