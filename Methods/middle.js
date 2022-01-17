const middle = function(array) {
  let middle = [];

  //For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length <= 2) {
    // console.log(`The array is smaller than length 2:`)
    return middle;
  }

  //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  if (array.length % 2 === 0) {
    // console.log("IF EVEN is triggered");
    let index1 = Math.floor(array.length / 2);
    let index2 = Math.floor((array.length / 2) - 1);
    // console.log(`index1: ${index1} || index 2: ${index2}`)
    middle.push(array[index2]);
    middle.push(array[index1]);
    return middle;
  }

  //For arrays with odd number of elements, an array containing a single middle element should be returned.
  if (array.length % 2 !== 0) {
    let indexOdd = Math.floor(array.length / 2);
    // console.log(`If ODD is Triggered`);
    // console.log(`index of midle number is ${indexOdd}`);
    middle.push(array[indexOdd]);
    // console.log(middle);
    return middle;
  }

};


module.exports = middle;