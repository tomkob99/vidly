

const winston = require('winston');
require('winston-mongodb');
const db = config.get('db');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.MongoDB({ db: db })
  ]
});

//module.exports = function(err, req, res, next) {
function expressErr(err, req, res, next) {
  // winston.error(err.message, err);
  logger.error(err.message, err);
  console.log('log out');
  if (res) res.status(500).send("Something failed");
};

function logerror(err) {
  logger.error(err.message, err);
  console.log('log out');
};
module.exports.expressErr = expressErr;
module.exports.logger = logger;
