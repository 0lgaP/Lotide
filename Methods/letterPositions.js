const letterPositions = function(sentence) {
  const results = {};
  for (const index in sentence) {
    //convert the type from string to number using bace 10
    const letter = parseInt(index, 10);
    // console.log("This is sentence[letter]: ",  sentence[letter]);
    // console.log("This is [letter]: ",  [letter]);
    if (results[sentence[letter]]) {
      // console.log(`if (results[sentence[letter]]) was triggered, the value of results[sentence[letter]] is: ${results[sentence[letter]]}`);
      results[sentence[letter]].push(letter);
    } else {
      results[sentence[letter]] = [letter];
    }
  }  return results;
};

module.exports = letterPositions;
