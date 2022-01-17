const assertEqual = require(`../Util/assertEqual`);
const eqArrays = require(`../Util/eqArrays`);

const assertArraysEqual = (arr1, arr2, boolian) => assertEqual(eqArrays(arr1, arr2), boolian);

module.exports = assertArraysEqual;