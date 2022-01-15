const without = function(source, itemsToRemove) {
  let withoutArray = [];
  for (let i = 0; i < source.length; i++) {
    // console.log("outer loop: " + source[i]);
    for (let j = i; j < itemsToRemove.length; j++) {
      // console.log("inner loop: " + itemsToRemove[j]);
      if (source[i] === itemsToRemove[j] && typeof source[i] === typeof itemsToRemove[i]) {
        // console.log("types are the same");
        // console.log("outerloop matches inner loop");
        // console.log("If was triggered, this is the state of withoutarray at this time : " + withoutArray);
        break;
      } else {
        withoutArray.push(source[i]);
        // console.log("else was triggered, this is the state of withoutarray at this time : " + withoutArray);
        break;
      }
    }
  }
  return withoutArray;
};

// Tests
// without([1, 2, 3], [1, 2, 4])
// without(["1", "2", "3"], [1, 2, "3"]);

module.exports = without;