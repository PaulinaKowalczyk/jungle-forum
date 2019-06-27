const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport')

require('dotenv').config();

const { notFound, errorHandler } = require('./middlewares'); // it automatically knows to grab index.js

const auth = require('./auth');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize())

// when a GET request comes in with /
app.get('/', (req,res) => {
    res.json({
        message: 'Welcome to jungle-forum'
    });
});

app.use('/auth', auth);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
