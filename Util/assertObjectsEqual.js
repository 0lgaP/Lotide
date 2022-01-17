const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');

const assertObjectsEqual = function(obj1, obj2) {
  const happy = String.fromCodePoint(0x1F920);
  const mad = String.fromCodePoint(0x1F621);
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(obj1,obj2)) {
    console.log(`${happy}${happy}${happy} Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

module.exports = assertObjectsEqual;
