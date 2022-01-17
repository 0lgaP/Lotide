const flatten = function(nestedArray) {
  let flatArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray && nestedArray[i].length >= 1) {
      // console.log("IF is triggered nestedArray.length is >= 1")
      for (let j = 0; j < nestedArray[i].length; j++) {
        // console.log(nestedArray[i][j])
        flatArray.push(nestedArray[i][j]);
        // console.log("IF's nested for-loop is triggered, state of flattArray is: " + flatArray)
      }
    } else {
      flatArray.push(nestedArray[i]);
      // console.log("else is triggered, state of flattArray is: " + flatArray)
    }
  }
  return flatArray;
};

module.exports = flatten;