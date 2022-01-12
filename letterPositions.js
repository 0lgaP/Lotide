const letterPositions = function(sentence) {
  const results = {};
  for (const index in sentence) {
    //convert the type from string to number using bace 10
    const letter = parseInt(index, 10);
    // console.log("This is sentence[letter]: ",  sentence[letter]);
    // console.log("This is [letter]: ",  [letter]);
    if (results[sentence[letter]]) {
      // console.log(`if (results[sentence[letter]]) was triggered, the value of results[sentence[letter]] is: ${results[sentence[letter]]}`);
      results[sentence[letter]].push(letter);
    } else {
      results[sentence[letter]] = [letter];
    }
  }  return results;
};
console.log(letterPositions("helllllo"));


const happy = String.fromCodePoint(0x1F920);
const mad = String.fromCodePoint(0x1F621);



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


const assertArraysEqual = function(a, b) {
  if (eqArrays(a, b)) {
    console.log(`${happy}${happy}${happy} Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${a} !== ${b}`);
  }
};

assertArraysEqual(letterPositions("hello").e, [1]);