class BasicAuth {

    constructor(username, password, host) {
        this.username = username;
        this.password = password;
        this.host = host;
    }

    BasicHeader() {
        let rt = { 'Host': this.host, 'Authorization': 'Basic ' + Buffer.from(this.username + ':' + this.password).toString('base64') };
        return rt;
    };
}

module.exports = BasicAuth