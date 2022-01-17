const countLetters = function(string) {
  let cleanString = string.replace(/ /g, '');

  const result = {};
 
  for (const value of cleanString) {
    if (result[value]) {
      result[value] += 1;
    } else {
      result[value] = 1;
    }
  }
  return result;
};

module.exports = countLetters;