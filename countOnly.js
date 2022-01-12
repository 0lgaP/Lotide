const happy = String.fromCodePoint(0x1F920);
const mad = String.fromCodePoint(0x1F621);
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${happy}${happy}${happy} Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`${mad}${mad}${mad} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

