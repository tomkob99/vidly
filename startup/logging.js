const winston = require('winston');
// require('express-async-errors');
const { logger } = require('../middleware/error');

module.exports = function() {
// module.exports = function(app) {
  process.on('uncaughtException', (ex) => {
    logger.error(ex.message, ex);
  });
  
  process.on('unhandledRejection', (ex) => {
    throw(ex);
  });
}
// }