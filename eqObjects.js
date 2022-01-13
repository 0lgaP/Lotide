const happy = String.fromCodePoint(0x1F920);
const mad = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${happy}${happy}${happy} Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
  }
};


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
      console.log(`value of object1's key is: ${object1[key]} the same as value of objs2's key ${object2[key]}`);
      return false;
    }
  }
  console.log(`I finished the loop and found no missmatches, returning true`)
  return true;
};

const eqArrays = function(arr1, arr2) {
  if (arr1 === arr2) {
    return true;
  }
  if (arr1 === null || arr2 === null) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (typeof arr1 !== typeof arr2) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const ab2 = { a: "1", b: "aarrvdrk" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(ab, ab2), false);