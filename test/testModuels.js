var FileUtil = require("../com/od/utils/FileUtils")
var logger = require("../com/od/utils/Logger")
var OSUtil = require("../com/od/utils/OSUtils")
logger.LoggerInfo("test loginfo")
logger.loggerDebug("test logDebug")
logger.loggerFatal("test crital");
logger.loggerError("test error");
logger.LoggerWarn("test warn");
logger.LoggerInfo("test logger end")