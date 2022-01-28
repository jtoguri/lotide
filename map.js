const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//Test Cases
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const empty = [];
const results2 = map(empty, x => x * 2);
assertArraysEqual(results2, []);

// Below points are outside the scope of this problem but good concepts to reason about

  //I think to handle nested arrays, we map the intial array and then pass map as a funciton to our original map, we would need a conditional check first. another way to dp this would be to filter only nested arrays then run map on each and combine the arrays back together, probably using pointers?

  //Its not specifed how we should handle numbers here, either a check would be implemented or a conversion done in our statment that calls map (somewhere in the anonymous callback functioin)