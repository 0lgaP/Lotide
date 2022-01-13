const happy = String.fromCodePoint(0x1F920);
const mad = String.fromCodePoint(0x1F621);



const eqArrays = function(arr1, arr2) {
  if (arr1 === arr2) {
    return true;
  }
  if (arr1 === null || arr2 === null) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (typeof arr1 !== typeof arr2) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(a, b) {
  if (eqArrays(a, b)) {
    console.log(`${happy}${happy}${happy} Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${a} !== ${b}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", "2", "3"], ["1", "23", "3"]);
assertArraysEqual(["1", "3"], ["1", "23", "3"]);
assertArraysEqual(["1", "23", "3"], ["1", "23"]);
assertArraysEqual(["1", "23"], ["1", "23", "fhqwgads"]);
