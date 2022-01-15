const findKeyByValue = function(obj, value) {
 
  const objectKeys = Object.keys(obj);
  const objectValues = Object.values(obj);
  for (let i = 0; i < objectValues.length; i++) {
    let indexOfValue;
    if (objectValues[i] === value) {
      indexOfValue = i;
      return objectKeys[indexOfValue];
    }
  }
};

// Tests
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;