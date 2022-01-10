
const assertEqual = function(actual, expected) {
  const happy = String.fromCodePoint(0x1F920);
  const mad = String.fromCodePoint(0x1F621);
  if (actual === expected) {
    console.log(`${happy}${happy}${happy} Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
};

assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");