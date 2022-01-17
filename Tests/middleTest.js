const assert = require('chai').assert;
const middle = require(`../Methods/middle`);
const assertArrayEqual = require(`../Util/assertArrayEqual`);

// 🐱 Test Cases for Middle
//-------------------------
console.log(assertArrayEqual(middle([1]), [], true)); //pass
console.log(assertArrayEqual(middle([1, 2]), [], true)); //pass
console.log(assertArrayEqual(middle([1, 2, 3]), [ 2 ], true)); //pass
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [ 3 ], true)); //pass
console.log(assertArrayEqual(middle([1, 2, 3, 4]), [ 2, 3 ], true)); //pass
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [ 3, 4 ], true)); //pass

// 🐱 Test Cases for eqArrays
//-----------------------------------

describe("middle", () => {
  it(`it returns an empty array if array length is 1`, () => {
    assert.strictEqual(middle([1]), []);
  });
  // it(`returns false for ["1", "23"], ["1", "23", "fhqwgads"]`, () => {
  //   assert.strictEqual(eqArrays(["1", "23"], ["1", "23", "fhqwgads"]), false);
  // });
});
