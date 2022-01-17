const countOnly = function(allItems, itemsToCount) {
  //set up an empty object to accept key:value
  const result = {};

  //initiate a for loop to loop through the array allItems
  for (let i = 0; i < allItems.length; i++) {
    // console.log("This is allItems[i] at this iteration: ", allItems[i]);
    // console.log("This is the value of the key [allItems[i]] if it is present in the object itemsToCount if absent, it is undefined: ", itemsToCount[allItems[i]]);
    if (itemsToCount[allItems[i]]) {
      // console.log("IF Statement is triggered if the value of the key itemsToCount[allItems[i]] evaluates to true: ", itemsToCount[allItems[i]]);
      if (result[allItems[i]]) {
        // console.log("Second IF Statement is triggered if the key [allItems[i]] is already present in the function's result array");
        result[allItems[i]] += 1;
      } else {
        // console.log("Else is triggered if the key is not present, in this case we add the key to the object with the value of 1");
        result[allItems[i]] = 1;
      }
    }
  }
  return result;
};

module.exports = countOnly;