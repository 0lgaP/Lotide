const takeUntil = function(array, callback) {
  let newArray = [];
  for (const item of array) {
    if (callback(item)) {
      return newArray;
    }
    newArray.push(item);
  }
};

module.exports = takeUntil;