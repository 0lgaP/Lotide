const assertEqual = require(`/home/olga/lighthouse/w1/lotide/Util/assertEqual`);
const eqArrays = require(`/home/olga/lighthouse/w1/lotide/Util/eqArrays`);

// 🐱 Test Cases for eqArrays
//-----------------------------------
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // pass
console.log(assertEqual(eqArrays(["1", "23"], ["1", "23", "fhqwgads"]), false)); //pass