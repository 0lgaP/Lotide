const assertEqual = function(actual, expected) {
  const happy = String.fromCodePoint(0x1F920);
  const mad = String.fromCodePoint(0x1F621);
  if (actual === expected) {
    return (`${happy}${happy}${happy} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return (`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Tests
// console.log(assertEqual("Olga", "#1"));
// console.log(assertEqual("Olga", "Olga"));

module.exports = assertEqual;