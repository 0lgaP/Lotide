
const args = process.argv;

//create the string from args
let extractArgs = "";
extractArgs += args.slice(2);
console.log(extractArgs);


//turn the string to an array splitting it on ' '
const formatAsArray = extractArgs.split(',');
console.log(formatAsArray);

//for loop that creates pig latin (works)
const pigLatin = (str) => {
  let firstLetter = str[0];
  let remainder = str.slice(1);
  let toLatin = remainder + firstLetter + "ay";
  return toLatin
}

formatAsArray.forEach((str) => {
  pigLatin(str).join(" ");
});


//everything works. but cant get it on the same line!!!!!