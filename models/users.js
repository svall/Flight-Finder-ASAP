/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const { ObjectID } = require('mongodb');
const { getDB }    = require('../lib/dbConnect.js');
const bcrypt       = require('bcryptjs');

const SALTROUNDS = 10;

// createUser() creates new user with username and passwor, inserts the data to users collection in flight_search db in Mongodb
// Code referenced from https://git.generalassemb.ly/wdi-nyc-60/user_auth_itunes
function createUser(req, res, next) {
  const userObject = {
    username: req.body.user.username,
    // email: req.body.user.email,
    password: bcrypt.hashSync(req.body.user.password, SALTROUNDS)
  };

  getDB().then((db) => {
    db.collection('users')
      .insert(userObject, (insErr, dbUser) => {
        if (insErr) return next(insErr);
        // console.log(dbUser);
        res.user = dbUser;
        db.close();
        return next();
      });
  });
}

// getUserById() finds the user in Mongodb based on the unique _id given by Mongo when the user registered
// Code referenced from https://git.generalassemb.ly/wdi-nyc-60/user_auth_itunes
function getUserById(id) {
  return getDB()
  .then((db) => {
    const promise = new Promise((resolve, reject) => {
      db.collection('users')
        .findOne({ _id: ObjectID(id) }, (findError, user) => {
          if (findError) reject(findError);
          // console.log('this is getuserby id ',user);
          db.close();
          resolve(user);
        });
    });
    return promise;
  });
}

// getUserByUsername() finds user in Mongodb based on the username the user entered when signing up
// Code referenced from https://git.generalassemb.ly/wdi-nyc-60/user_auth_itunes
function getUserByUsername(username) {
  return getDB().then((db) => {
    const promise = new Promise((resolve, reject) => {
      db.collection('users')
        .findOne({ username }, (findError, user) => {
          if (findError) reject(findError);
          // console.log('this is getuserby username ',user);
          db.close();
          resolve(user);
        });
    });
    return promise;
  });
}

module.exports = { createUser, getUserById, getUserByUsername };
