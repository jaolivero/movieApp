const winston = require('winston/lib/winston/config');

const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function () {
  mongoose
    .connect('mongodb://localhost/movieApp', { useNewUrlParser: true })
    .then(() => winston.info('connected to MongoDB..'));
};
