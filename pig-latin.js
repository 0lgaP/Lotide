
const args = process.argv;

//create the string from args
let extractArgs = "";
extractArgs += args.slice(2);
// console.log(extractArgs);


//turn the string to an array splitting it on ' '
const formatAsArray = extractArgs.split(',');
console.log(formatAsArray);

//for loop that creates pig latin (works)
const pigLatin = (str) => {
  let firstLetter = str[0];
  let remainder = str.slice(1);
  let toLatin = remainder + firstLetter + "ay";
  return toLatin;
};

//set up an empty string and run a for each loop that runs
//piglatin function on every item, and adds it to result,
//sepporated by a space
let result = "";
formatAsArray.forEach((str) => {
  result += (pigLatin(str));
  result += " ";
});

console.log(result);

