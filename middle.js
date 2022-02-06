// Function that takes in an array and returns the middle-most element(s) of the given array

const middle = function(arr) {
  let midArr = [];
  const midPoint = Math.floor(arr.length / 2);
  
  if (arr.length < 3) {
    return midArr;
  }
  
  if (arr.length % 2 === 0) {
    midArr.push(arr[midPoint - 1], arr[midPoint]);
  } else {
    midArr.push(arr[midPoint]);
  }

  return midArr;
};

module.exports = middle;