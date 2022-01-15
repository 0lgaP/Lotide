const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;
//housekeeping
// const happy = String.fromCodePoint(0x1F920);
// const mad = String.fromCodePoint(0x1F621);
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`${happy}${happy}${happy} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
//   }
// };




// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma")

