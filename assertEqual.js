// The assertEqual function takes in two values to compare and prints out a message to confirming if they match or not.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  console.log(`❌❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  return false;
};

module.exports = assertEqual;