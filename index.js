var searchEntity = require('./search');
var basicAuth = require('./com/od/auth/basic')
var odConsumer = require('./com/od/eventbroker/activemqMutliConnections')
module.exports = {
    SearchDQL: searchEntity.api,
    DQLEntry: searchEntity.searchEntry,
    BasicAuth: basicAuth,
    ODConsumer: odConsumer
}