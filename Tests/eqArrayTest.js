const assertEqual = require(`/home/olga/lighthouse/w1/lotide/Util/assertEqual`);
const eqArrays = require(`/home/olga/lighthouse/w1/lotide/Util/eqArrays`);

const assertArraysEqual = (arr1, arr2, boolian) => assertEqual(eqArrays(arr1, arr2), boolian);

// Tests
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3], true)); //pass
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true)); //pass
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3], false)); //pass
console.log(assertArraysEqual(["1", "2", "3"], ["1", "23", "3"], false)); //pass
console.log(assertArraysEqual(["1", "3"], ["1", "23", "3"], false)); //pass
console.log(assertArraysEqual(["1", "23", "3"], ["1", "23"], false)); //pass
console.log(assertArraysEqual(["1", "23"], ["1", "23", "fhqwgads"], false)); //pass