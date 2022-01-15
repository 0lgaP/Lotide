// const assertEqual = function(actual, expected) {
//   const happy = String.fromCodePoint(0x1F920);
//   const mad = String.fromCodePoint(0x1F621);
//   if (actual === expected) {
//     console.log(`${happy}${happy}${happy} Assertion Passed: ${actual} === ${actual}`);
//   } else {
//     console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const tail = function(array) {
  return array.slice(1);
};
module.exports = tail;

// const words = ["Yo Yo", "Lighthouse", "Labs"];

// const result = tail(words);

// const arrayEquality = function(result, original) {
//   for (let i = 0; i < result.length; i++) {
//     assertEqual(result[i], original[i + 1]);
//   }
// };

// arrayEquality(result, words);

