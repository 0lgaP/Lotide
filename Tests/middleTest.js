const assert = require('chai').assert;
const expect = require('chai').expect;
const middle = require(`../Methods/middle`);
const assertArrayEqual = require(`../Util/assertArrayEqual`);

// 🐱 Test Cases for Middle
//-------------------------
describe("middle", () => {
  it(`it returns an empty array if array length is 1`, () => {
    assert.deepEqual(middle([1]), []);
  });
  it(`it returns the middle number if array length is odd`, () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it(`it returns thetwo middle numbers id even`, () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
});

// 🐱 Test Cases for assertArrayEquals
//------------------------------------
describe("assertArrayEquals", () => {
  it(`it returns assertion passed if two arrays are equal`, () => {
    assert.strictEqual(assertArrayEqual(middle([1]), [], true), `🤠🤠🤠 Assertion Passed: true === true`);
  });
  it(`it returns assertion failed if two arrays not equal`, () => {
    assert.strictEqual(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [ 3 ], true),`😡😡😡 Assertion Failed: false !== true`);
  });

});