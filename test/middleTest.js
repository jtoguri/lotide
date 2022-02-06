// test/middleTest.js

const middle = require("../middle.js");
const assertArraysEqual = require("../assertArraysEqual");

// Test Cases

// For arrays with one or two elements, there is no middle. Return an empty array.

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

console.log('\n');

// For arrays with odd number of elements, an array containing a single middle element should be returned.

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

console.log('\n');

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);