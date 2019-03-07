const circle = require('./com/od/math/circle');
var logger = require('./com/od/utils/Logger');
const r = 3;

logger.LoggerInfo(`Circle with radius ${r} has
  area: ${circle.area(r)};
  circunference: ${circle.circumference(r)}`);

var foo = ['a', 'ab', 'abc'];

var bar = foo.map(g => g.length);

var f1 = f => f ** 3

console.log(f1(3))

console.log(bar); // 1,2,3