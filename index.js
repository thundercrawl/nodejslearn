var searchEntity = require('./search');
var basicAuth = require('./com/od/auth/basic')

module.exports = {
    SearchDQL: searchEntity.api,
    DQLEntry: searchEntity.searchEntry,
    BasicAuth: basicAuth
}