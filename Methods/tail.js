const tail = function(array) {
  return array.slice(1);
};

// Tests
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const result = tail(words);
// console.log(result)
console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));

module.exports = tail;
