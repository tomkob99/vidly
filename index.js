
const express = require('express');
const app = express();
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);
const error = require('./middleware/error');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => error.logger.info(`Listening on port ${port}...`));

module.exports = server;