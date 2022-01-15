const takeUntil = function(array, callback) {
  let newArray = [];
  for (const item of array) {
    if (callback(item)) {
      return newArray;
    }
    newArray.push(item);
  }
};
module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


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

// assertEqual(eqArrays(results1, [ 1, 2, 5, 7, 2 ]), true);
// assertEqual(eqArrays(results2, [ "I've", 'been', 'to', 'Hollywood' ]), true);
