// Function that takes in an array and returns the first element from the array. If the array is empty, it returns undefined.

const head = function(arr) {
  return arr.length > 0 ? arr[0] : undefined;
};

module.exports = head;