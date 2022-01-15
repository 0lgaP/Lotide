const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');

const happy = String.fromCodePoint(0x1F920);
const mad = String.fromCodePoint(0x1F621);

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(obj1,obj2)) {
    console.log(`${happy}${happy}${happy} Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

// Tests

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// const ab2 = { a: "1", b: "aarrvdrk" };

// assertObjectsEqual(ab, ba);
// assertObjectsEqual(ab, ba);
// assertObjectsEqual(ab, abc);
// assertObjectsEqual(cd, dc);
// assertObjectsEqual(cd, cd2);
// assertObjectsEqual(ab, ab2);

module.exports = assertObjectsEqual;
