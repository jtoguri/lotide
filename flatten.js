const flatten = function(arr) {
  let flattenedArr = [];

  for (let index of arr) {
    if (Array.isArray(index)) {
      flattenedArr = flattenedArr.concat(flatten(index));
    } else {
      flattenedArr.push(index);
    }
  }

  return flattenedArr;
};

// Test Cases
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4], 5, [6], [7, [8, 9, 10], [11, 12, [13, 14], 15]], 16])); // => [1, 2, 3 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]