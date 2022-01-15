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


const middle = function(array) {
  let middle = [];

  //For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length <= 2) {
    // console.log(`The array is smaller than length 2:`)
    console.log(middle);
    return middle;
  }

  //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  if (array.length % 2 === 0) {
    // console.log("IF EVEN is triggered");
    let index1 = Math.floor(array.length / 2);
    let index2 = Math.floor((array.length / 2) - 1);
    // console.log(`index1: ${index1} || index 2: ${index2}`)
    middle.push(array[index2]);
    middle.push(array[index1]);
    console.log(middle);
    return middle;
  }

  //For arrays with odd number of elements, an array containing a single middle element should be returned.
  if (array.length % 2 !== 0) {
    let indexOdd = Math.floor(array.length / 2);
    // console.log(`If ODD is Triggered`);
    // console.log(`index of midle number is ${indexOdd}`);
    middle.push(array[indexOdd]);
    // console.log(middle);
    return middle;
  }
};
module.exports = middle;
// middle([1]);
// middle([1, 2]);
// middle([1, 2, 3]);
// middle([1, 2, 3, 4, 5]);
// middle([1, 2, 3, 4]);
// middle([1, 2, 3, 4, 5, 6]);