const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),  // default
    transports: [
        new winston.transports.Console()
    ]
});

logger.debug('Debug Message');
logger.info('Info Message');
logger.warn('Warn Message');
logger.error('Error Message');