const chai = require('chai');

// list of requirements for Util
const assertEqual = require('./Util/assertEqual');
const eqArrays = require('./Util/eqArrays');
const assertObjectsEqual = require('./Util/assertObjectsEqual');
const assertArrayEqual = require('./Util/assertArrayEqual');
const eqObjects = require('./Util/eqObjects');

// list of requirements for Methods
const sayHelloTo = require('./Methods/myModule');
const countLetters = require('./Methods/countLetters');
const countOnly = require('./Methods/countOnly');
const findKey = require('./Methods/findKey');
const findKeyByValue = require('./Methods/findKeyByValue');
const flatten = require('./Methods/flatten');
const head = require('./Methods/head');
const letterPositions = require('./Methods/letterPositions');
const map = require('./Methods/map');
const middle = require('./Methods/middle');
const moduleCheck = require('./Methods/moduleCheck');
const tail = require('./Methods/tail');
const takeUntil = require('./Methods/takeUntil');
const without = require('./Methods/without');

module.exports = {
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  assertObjectsEqual: assertObjectsEqual,
  assertArrayEqual: assertArrayEqual,
  eqObjects: eqObjects,
  sayHelloTo: sayHelloTo,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  findKeyByValue:findKeyByValue,
  flatten: flatten,
  head: head,
  letterPositions: letterPositions,
  map: map,
  middle: middle,
  moduleCheck: moduleCheck,
  tail: tail,
  takeUntil: takeUntil,
  without: without,
};

