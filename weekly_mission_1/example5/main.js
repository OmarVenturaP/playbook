const logger = require('./logger')

logger.log('This is an informational message')

const costumerLogger = new logger.constructor('COSTUMER')
costumerLogger.log('This is a informational message')