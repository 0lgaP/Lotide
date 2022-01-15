const happy = String.fromCodePoint(0x1F920);
const mad = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${happy}${happy}${happy} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Tests
// console.log(assertEqual("Olga", "#1"));
// console.log(assertEqual("Olga", "Olga"));

module.exports = assertEqual;