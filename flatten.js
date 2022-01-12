// const happy = String.fromCodePoint(0x1F920);
// const mad = String.fromCodePoint(0x1F621);



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


// const assertArraysEqual = function(a, b) {
//   if (eqArrays(a, b)) {
//     console.log(`${happy}${happy}${happy} Assertion Passed: ${a} === ${b}`);
//   } else {
//     console.log(`${mad}${mad}${mad} Assertion Failed: ${a} !== ${b}`);
//   }
// };

const flatten = function(nestedArray) {
  let flatArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray && nestedArray[i].length >= 1) {
      // console.log("IF is triggered nestedArray.length is >= 1")
      for (let j = 0; j < nestedArray[i].length; j++) {
        // console.log(nestedArray[i][j])
        flatArray.push(nestedArray[i][j]);
        // console.log("IF's nested for-loop is triggered, state of flattArray is: " + flatArray)
      }
    } else {
      flatArray.push(nestedArray[i]);
      // console.log("else is triggered, state of flattArray is: " + flatArray)
    }
  }
  return flatArray;
};


console.log(flatten([1, 2, [3, 4], 5, [6]]));