const assert = require('chai').assert;
// list of requirements from Util
const assertEqual = require(`../Util/assertEqual`);
const eqArrays = require(`../Util/eqArrays`);

// 🐱 Test Cases for eqArrays
//-----------------------------------

describe("eqArrays", () => {
  it("it returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it(`returns false for ["1", "23"], ["1", "23", "fhqwgads"]`, () => {
    assert.strictEqual(eqArrays(["1", "23"], ["1", "23", "fhqwgads"]), false);
  });
});

// 🐱 Test Cases for assertEqual
//-----------------------------------
describe("assertEqual", () => {
  it(`returns assertion passed false === false`, () => {
    assert.strictEqual(assertEqual(eqArrays(["1", "23"], ["1", "23", "fhqwgads"]), false), `🤠🤠🤠 Assertion Passed: false === false`);
  });
  it(`returns assertion passed true === true`, () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true), `🤠🤠🤠 Assertion Passed: true === true`);
  });

});