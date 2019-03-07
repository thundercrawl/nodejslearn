var log4js = require('log4js');
var FileUtils = require('./FileUtils');
var LOG_FILE_PATH = "c:/tmp/console.log";
FileUtils.createLogFileBYPATH(LOG_FILE_PATH)
log4js.configure({
    appenders: {
        all: { type: 'file', filename: LOG_FILE_PATH },
        console: { type: 'console' }
    },

    categories: { default: { appenders: ['console'], level: 'info' }, }
});
var loggerALL = log4js.getLogger();
var loggerConsole = log4js.getLogger('print');
module.exports = {
    setLogLevel: function(level, type) {
        log4js.configure({
            appenders: {
                all: { type: 'file', filename: LOG_FILE_PATH },
                console: { type: 'console' }
            },

            categories: { default: { appenders: [type], level: level }, }
        });

    },
    LoggerInfo: function(message) {
        loggerALL.info(message);
        //   loggerConsole.info(message)
    },
    LoggerWarn: function(message) {
        loggerALL.warn(message);
        //   loggerConsole.info(message)
    },
    loggerError: function(message) {
        loggerALL.error(message)
    },

    loggerDebug: function(message) {
        loggerALL.debug(message)
    },

    loggerFatal: function(message) {
        loggerALL.fatal(message)

    }
};