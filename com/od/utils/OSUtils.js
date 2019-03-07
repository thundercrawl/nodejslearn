var os = require('os')
var logger = require('./Logger')

logger.LoggerInfo(os.hostname());
logger.LoggerInfo(os.homedir());