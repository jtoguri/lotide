// test/tailTest.js

const tail = require("../tail");
const assertEqual = require("../assertEqual");

// Test Code

// Check the original array was not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

console.log('\n');

// Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

console.log('\n');

// An array with only one element should yield an empty array for its tail
const result2 = tail([1]);
assertEqual(Array.isArray(result2), true);
assertEqual(result2.length, 0);

console.log('\n');

// Test Case 3: An empty array should yield an empty array for its tail
const result3 = tail([]);
assertEqual(Array.isArray(result3), true);
assertEqual(result3.length, 0);