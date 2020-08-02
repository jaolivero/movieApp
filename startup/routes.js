const express = require('express');
const genres = require('../routes/Genres');
const customers = require('../routes/Customers');
const movies = require('../routes/Movies');
const rentals = require('../routes/Rentals');
const users = require('../routes/users');
const auth = require('../routes/Auth');
const error = require('../middleware/error');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/genres', genres);
  app.use('/api/customers', customers);
  app.use('/api/movies', movies);
  app.use('/api/rentals', rentals);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use(error);
};
