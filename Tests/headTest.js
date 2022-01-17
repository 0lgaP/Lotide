const chai = require('chai');
// list of requirements from Util
const assertEqual = require('/home/olga/lighthouse/w1/lotide/Util/assertEqual');
// list of requirements form Methods
const head = require('/home/olga/lighthouse/w1/lotide/Methods/head');


// 🐱 Test Cases for Head
//---------------------------
console.log(assertEqual(head([ 1, 2, 3, 4, 5, 6 ]), 1)); //pass
console.log(assertEqual(head([ 1, 2, 3, 4, 5, 6 ]), 2)); //fail

