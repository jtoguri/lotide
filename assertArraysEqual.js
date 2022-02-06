// Import the eqArrays function

const eqArrays = require("./eqArrays");

// Function that takes in two arrays and prints out a message confirming if they are identical or not

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;