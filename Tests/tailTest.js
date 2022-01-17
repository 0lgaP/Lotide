const assert = require('chai').assert;
// list of requirements from Util
const assertArrayEqual = require('../Util/assertArrayEqual');
// list of requirements form Methods
const tail = require('../Methods/tail');


// 🐱 Test Cases for Tail
//---------------------------
console.log(assertArrayEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [ 'Lighthouse', 'Labs' ], true)); //pass
console.log(assertArrayEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Yo Yo", "Lighthouse"], false)); //pass