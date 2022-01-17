const assert = require('chai').assert;
const middle = require(`../Methods/middle`);
const assertArrayEqual = require(`../Util/assertArrayEqual`);

// 🐱 Test Cases for Middle
//-------------------------
console.log(assertArrayEqual(middle([1]), [], true)); //pass
console.log(assertArrayEqual(middle([1, 2]), [], true)); //pass
console.log(assertArrayEqual(middle([1, 2, 3]), [ 2 ], true)); //pass
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [ 3 ], true)); //pass
console.log(assertArrayEqual(middle([1, 2, 3, 4]), [ 2, 3 ], true)); //pass
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [ 3, 4 ], true)); //pass

