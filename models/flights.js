// User template code was provided by instructors at General Assembly (https://git.generalassemb.ly/wdi-nyc-60/user_auth_itunes)
// const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');
const { getDB }    = require('../lib/dbConnect.js');
// const dbConnection = 'mongodb://localhost:27017/flight_search';

// displaySavedFlights() displays any flights previously saved by this user
// Code referenced from https://git.generalassemb.ly/wdi-nyc-60/tom-cruise-movie-db/tree/rafa-solution
function displaySavedFlights(req, res, next) {
  // MongoClient.connect(dbConnection, (err, db) => {
  getDB().then((db) => {
  // if (err) return next(err);

  db.collection('trips')
    // .find({})
    .find({ userId: { $eq: req.session.userId } })
    .toArray((toArrayErr, saveddata) => {
      if (toArrayErr) return next(toArrayErr);
      // console.log(saveddata);
      res.savedflights = saveddata;
      // console.log('this is the # of saved ', res.savedflights.length);
      db.close();
      next();
    });
    // console.log('session user id is ', req.session.userId);
    return false;
  });
  return false;
}

// saveFlight() posts the flight information to Mongodb with the current user's id
// Code referenced from https://git.generalassemb.ly/wdi-nyc-60/tom-cruise-movie-db/tree/rafa-solution
function saveFlight(req, res, next) {
  // creating an empty object for the insertObj
  const insertObj = {};
  // copying all of req.body into insertObj
  for(key in req.body) {
    insertObj[key] = req.body[key];
    // console.log('this is insertObj[key] ', insertObj[key]);
  }
  // Adding userId to insertObj
  insertObj.trips.userId = req.session.userId;
  // console.log('this is insertObj.trips.userId ', insertObj.trips.userId);

  // MongoClient.connect(dbConnection, (err, db) => {
  getDB().then((db) => {
    // if (err) return next(err);
    // console.log(insertObj.trips);
    db.collection('trips')
      // .insert(req.body.trips, (inErr, flightsaved) => {
      .insert(insertObj.trips, (inErr, flightsaved) => {
        if (inErr) return next(inErr);

        res.saved = flightsaved;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

// deleteSavedFlight() deletes from the trip collection in Mongodb the current document
// Code referenced from https://git.generalassemb.ly/wdi-nyc-60/tom-cruise-movie-db/tree/rafa-solution
function deleteSavedFlight(req, res, next) {
  // MongoClient.connect(dbConnection, (err, db) => {
  getDB().then((db) => {
    // if (err) return next(err);
    // console.log('this is deleting', req.params.id);
    db.collection('trips')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (rerr, doc) => {
        if (rerr) return next(rerr);

        res.deleted = doc;
        db.close();
        return next();
      });
      return false;
  });
  return false;
}

// editSavedFlights() replaces the current comment in Mongobd for the new input text
// Code referenced from https://git.generalassemb.ly/wdi-nyc-60/tom-cruise-movie-db/tree/rafa-solution
function editSavedFlights (req, res, next) {
  // MongoClient.connect(dbConnection, (err, db) => {
  getDB().then((db) => {
    // if (err) return next(err);
    // console.log('this is the edits req ', req.params.id);

    db.collection('trips')
      .findAndModify({ _id: ObjectID(req.params.id) }, [],
        { $set: req.body.edit }, { new: true }, (editErr, doc) => {
        if (editErr) return next(editErr);

        res.edited = doc;
        // console.log(res.edited);
        db.close();
        return next();
      });
      return false;
  });
  return false;
}

module.exports = { saveFlight, displaySavedFlights, deleteSavedFlight, editSavedFlights };
