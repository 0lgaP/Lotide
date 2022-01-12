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

const array = ["1", "2", "3"];
const without = function(source, itemsToRemove) {
  let withoutArray = [];
  for (let i = 0; i < source.length; i++) {
    // console.log("outer loop: " + source[i]);
    for (let j = i; j < itemsToRemove.length; j++) {
      // console.log("inner loop: " + itemsToRemove[j]);
      if (source[i] === itemsToRemove[j] && typeof source[i] === typeof itemsToRemove[i]) {
        // console.log("types are the same");
        // console.log("outerloop matches inner loop");
        // console.log("If was triggered, this is the state of withoutarray at this time : " + withoutArray);
        break;
      } else {
        withoutArray.push(source[i]);
        // console.log("else was triggered, this is the state of withoutarray at this time : " + withoutArray);
        break;
      }
    }
  }
  console.log(withoutArray);
  return withoutArray;
};
assertArraysEqual(array, ["1", "2", "3"]);

// without([1, 2, 3], [1, 2, 4])
without(["1", "2", "3"], [1, 2, "3"]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);