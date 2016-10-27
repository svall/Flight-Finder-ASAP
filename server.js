// set up basic express server
const express = require('express');
const logger = require('morgan');
const path = require('path');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
// const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 3000;

// require routes
const homeRoute = require('./routes/home');
const searchRoute = require('./routes/search');
const historyRoute = require('./routes/history');

// set up middleware
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true}));
// app.use(methodOverride('_method'));

// set up views
app.set('view engine', 'ejs');
app.set('views', './views');

// links to route files to views:
app.use('/', homeRoute);
app.use('/', searchRoute);
app.use('/', historyRoute);

// set up server port listener
app.listen(port, () => console.log('Server running on port ', port));
