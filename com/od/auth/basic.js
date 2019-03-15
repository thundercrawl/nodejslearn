var BasicAuth = (username, password, host) => {
    this.username = username
    this.password = password
    this.host = host
}
BasicAuth.prototype.basicHeader = () => { return { 'Host': host, 'Authorization': 'Basic ' + Buffer.from(username + ':' + password).toString('base64') } };

module.exports.BasicAuth = BasicAuth