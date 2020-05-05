
const config = require('config');
const mongoose = require('mongoose');
const { logger } = require('../middleware/error');

// mongoose.connect('mongodb://192.168.0.36:27017/vidly')
const db = config.get('db');

module.exports = function() {
  mongoose.connect(db)
  .then(() => logger.info(`Connected to ${db}...`));
}