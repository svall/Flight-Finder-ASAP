// set up basic express server
const express = require('express');
const logger = require('morgan');
const path = require('path');
const dotenv = require('dotenv').config({silent: true});
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 3000;

const SECRET = 'tacos3000';

// require routes
const authRouter = require('./routes/auth');
// const historyRoute = require('./routes/history');
// const homeRoute = require('./routes/home');
const indexRoute = require('./routes/index');
// const searchRoute = require('./routes/search');
const usersRouter = require('./routes/users');

// set up views
app.set('view engine', 'ejs');
app.set('views', './views');

// set up middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));

app.use(express.static(path.join(__dirname, 'public')));

// links to route files to views:
app.use('/', indexRoute);
app.use('/', authRouter);
app.use('/', usersRouter);
// app.use('/', homeRoute);
// app.use('/', searchRoute);
// app.use('/', historyRoute);

// set up server port listener
app.listen(port, () => console.log('Server running on port ', port));
