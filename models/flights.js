const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

const dbConnection = 'mongodb://localhost:27017/flight_search';

function saveFlight(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
    // console.log(req.body.trips);
    db.collection('trips')
      .insert(req.body.trips, (inErr, flightsaved) => {
        if (inErr) return next(inErr);

        res.saved = flightsaved;
        db.close();
        return next();
      });
      return false;
  });
  return false;
}

function displaySavedFlights(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
  if (err) return next(err);

  db.collection('trips')
    .find({})
    .toArray((err, saveddata) => {
      if (err) return next(err);
      console.log(saveddata);
      res.savedflights = saveddata;
      db.close();
      return next();
    });
    return false;
  });
  return false;
}

module.exports = { saveFlight, displaySavedFlights };
