// Function that takes in an array and returns a new array consisting of everything except for the first item (head) of the provided array.

const tail = function(arr) {
  return arr.length < 2 ? [] : arr.slice(1);
};

module.exports = tail;