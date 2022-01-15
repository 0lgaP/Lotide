// list of requirements for Util
const assertEqual = require('./Util/assertEqual');
const eqArrays = require('./Util/eqArrays');
const assertObjectsEqual = require('./Util/assertObjectsEqual');


// list of requirements for non-Util functions
const sayHelloTo = require('./Methods/myModule');
const countLetters = require('./Methods/countLetters');
const countOnly = require('./Methods/countOnly');
const findKey = require('./Methods/findKey');
const findKeyByValue = require('./Methods/findKeyByValue');
const flatten = require('./Methods/flatten');
const head = require('./Methods/head');
const letterPositions = require('./Methods/letterPositions');
const map = require('./Methods/map');
const middle = require('./Methods/middle');
const moduleCheck = require('./Methods/moduleCheck');
const tail = require('./Methods/tail');

// refactored functions
const assertArrayEqual = (arr1, arr2, boolian) => assertEqual(eqArrays(arr1, arr2), boolian);


// export multiple functions
// module.exports = {    function1,    function2,    function3 }

// Test Cases for Utils
// sayHelloTo('Code Queen 👑 !!!');
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertArrayEqual([1, 2, 3], [1, 2, 3], true);
// assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });

//Test cases for Methods
// console.log(countLetters("lighthouse in the house"));
// console.log(countOnly([
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));
// console.log(findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
// }, x => x.stars === 2));
// console.log(findKeyByValue({
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "Ru Paul's Drag Race"
// }, "Ru Paul's Drag Race"));
// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(head([ 1, 2, 3, 4, 5, 6 ]));
// console.log(letterPositions("helllllo"));
// console.log(map(["ground", "control", "to", "major", "tom"], word => word[0]));
// console.log(middle([1, 2, 3, 4, 5]));
// // console.log(moduleCheck());
// console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));


