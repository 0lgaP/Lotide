const assert = require('chai').assert;
// list of requirements form Methods
const head = require('../Methods/head');

// 🐱 Tests for Head
//------------------

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


