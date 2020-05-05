const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({ level: 'warn' }),
        new winston.transports.File({ filename: 'app.log', level: 'error' })
    ]
});

logger.debug('Debug Message');
logger.info('Info Message');
logger.warn('Warn Message');
logger.error('Error Message');