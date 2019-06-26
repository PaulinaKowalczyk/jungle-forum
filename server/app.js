var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

const { notFound, errorHandler } = require('./middlewares'); // it automatically knows to grab index.js

const auth = require('./auth');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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
