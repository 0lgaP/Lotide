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

module.exports = findKeyByValue;