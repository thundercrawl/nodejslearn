var log4js = require('log4js');
var FileUtils = require('./FileUtils');
var LOG_FILE_PATH = "c:/tmp/console.log";
FileUtils.createLogFileBYPATH(LOG_FILE_PATH)
log4js.configure({
    appenders: { console: { type: 'console' } },
    categories: { default: { appenders: ['console'], level: 'debug' } }
});
var logger = log4js.getLogger('console');

module.exports = {
    LoggerInfo: function(message) {
        logger.info(message);
    },

    loggerError: function(message) {
        logger.error(message)
    },

    loggerDebug: function(message) {
        logger.debug(message)
    },

    loggerFatal: function(message) {
        logger.fatal(message)
    }
};