const assert = require('chai').assert;
const assertEqual = require(`../Util/assertEqual`);
const eqArrays = require(`../Util/eqArrays`);


// 🐱 Test Cases for eqArrays
//-----------------------------------
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // pass
console.log(assertEqual(eqArrays(["1", "23"], ["1", "23", "fhqwgads"]), false)); //pass