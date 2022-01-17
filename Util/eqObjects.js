const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual')

const happy = String.fromCodePoint(0x1F920);
const mad = String.fromCodePoint(0x1F621);

const eqObjects = function(object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (const key of obj1Keys) {
    if (object2[key] === undefined) {
      // obj2's value at key of objt1 exhists?
      //only returns in the loop are FALSEEEEEE
      return false;
    }
    if (Array.isArray(object1[key])) {
      //evealuating values of the two arrays, if they are different we return false
      if (!(eqArrays(object1[key], object2[key]))) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      // console.log(`value of object1's key is: ${object1[key]} the same as value of objs2's key ${object2[key]}`);
      return false;
    }
  }
  // console.log(`I finished the loop and found no missmatches, returning true`)
  return true;
};

module.exports = eqObjects;
