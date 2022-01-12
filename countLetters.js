const happy = String.fromCodePoint(0x1F920);
const mad = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${happy}${happy}${happy} Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let cleanString = string.replace(/ /g, '');

  const result = {};
 
  for (const value of cleanString) {
    if (result[value]) {
      result[value] += 1;
    } else {
      result[value] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));