
const args = process.argv;

//create the string from args
let extractArgs = "";
extractArgs += args.slice(2);

//reverse the string using an arrow function
const reverse = (str) => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};

//turn the string to an array splitting it on ','
const formatAsArray = extractArgs.split(',');

//use a forEach loop to apply the function 'reverse'
//on each element of the 'formatAsArray' array
formatAsArray.forEach((str) => {
  console.log(reverse(str));
});
