const assert = require('chai').assert;
// list of requirements from Util
const assertEqual = require('../Util/assertEqual');
// list of requirements form Methods
const head = require('../Methods/head');


// 🐱 Test Cases for Head
//---------------------------
// console.log(assertEqual(head([ 1, 2, 3, 4, 5, 6 ]), 1)); //pass
// console.log(assertEqual(head([ 1, 2, 3, 4, 5, 6 ]), 2)); //fail

describe("head", () => {
  it("it returns 1 for [1,2,3]", () => {
    const input = head([1,2,3]);
    const output = 1;
    assert.strictEqual(input, output);
  });
  it("returns '5' for [5]", () => {
    assert.strictEqual(head(['5']), '5');
  });
});


