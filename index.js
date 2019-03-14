"use strict"
const circle = require('./com/od/math/circle');
var logger = require('./com/od/utils/Logger');
const sleep = require('system-sleep');
const r = 3;

logger.LoggerInfo(`Circle with radius ${r} has
  area: ${circle.area(r)};
  circunference: ${circle.circumference(r)}`);

var foo = ['a', 'ab', 'abc'];

var bar = foo.map(g => g.length);

var f1 = f => f ** 3

console.log(f1(3))

console.log(bar); // 1,2,3

var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('end of promise test');
    }, 300);
});

promise1.then(function(value) {
    console.log(value);
});

// print process.argv
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});
console.log(promise1);

var container = require("./com/od/entity/container")
var c1 = new container("first", "last")
logger.LoggerInfo(c1.fullName())
logger.LoggerInfo("Consume message from activemq")
var MQClient = require("./com/od/eventbroker/activemq")
var client1 = new MQClient("127.0.0.1")


while (true) {
    client1.sendMessage("1", "/queue/test")
    sleep(3000)
}