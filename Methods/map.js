// const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};
module.exports = map;
// const results1 = map(words, word => word[0]);
// console.log(results1);

// const happy = String.fromCodePoint(0x1F920);
// const mad = String.fromCodePoint(0x1F621);
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`${happy}${happy}${happy} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const eqArrays = function(arr1, arr2) {
//   if (arr1 === arr2) {
//     return true;
//   }
//   if (arr1 === null || arr2 === null) {
//     return false;
//   }
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   if (typeof arr1 !== typeof arr2) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// assertEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]), true);