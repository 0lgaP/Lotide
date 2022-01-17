const chai = require('chai');
// list of requirements from Util
const assertArrayEqual = require('/home/olga/lighthouse/w1/lotide/main');
// list of requirements form Methods
const tail = require('/home/olga/lighthouse/w1/lotide/Methods/tail');


// 🐱 Test Cases for Tail
//---------------------------
console.log(assertArrayEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), [ 'Lighthouse', 'Labs' ], true)); //pass
console.log(assertArrayEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Yo Yo", "Lighthouse"], false)); //pass