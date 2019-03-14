'use strict';
var logger = require('../utils/Logger')
var stompit = require('stompit');

var connectOptions = {
    'host': 'localhost',
    'port': 61613,
    'connectHeaders': {
        'host': '/',
        'login': 'username',
        'passcode': 'password',
        'heart-beat': '5000,5000'
    }
};




module.exports = function(brokeruri, dest) {
    this.brokerURI = brokeruri;
    this.sendMessage = function(message) {
        stompit.connect(connectOptions, function(error, client) {
            logger.LoggerInfo("uri is:" + brokeruri)
            if (error) {
                console.log('connect error ' + error.message);
                return;
            }

            var sendHeaders = {
                'destination': dest,
                'content-type': 'text/plain'
            };

            var frame = client.send(sendHeaders);
            frame.write(message);
            frame.end();

            var subscribeHeaders = {
                'destination': '/queue/test',
                'ack': 'client-individual'
            };
        });

    };
    this.receiveMessage = function() {
        stompit.connect(connectOptions, function(error, client) {

            client.subscribe(subscribeHeaders, function(error, message) {

                if (error) {
                    console.log('subscribe error ' + error.message);
                    return;
                }

                message.readString('utf-8', function(error, body) {

                    if (error) {
                        console.log('read message error ' + error.message);
                        return;
                    }

                    console.log('received message: ' + body);

                    client.ack(message);

                    client.disconnect();
                });
            })
        });

    };

};