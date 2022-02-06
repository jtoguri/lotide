const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0, n = sentence.length; i < n; i++) {
    const stndLetter = sentence[i].toLowerCase();
    if (stndLetter === sentence[i].toUpperCase()) {
      continue;
    }
    if (results[stndLetter]) {
      results[stndLetter].push(i);
    }
    else {
      results[stndLetter] = [i];
    }
  }
  return results;
};

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

// Test Cases
const hello = letterPositions("hello");
assertArraysEqual(hello.h, [0]);
assertArraysEqual(hello.e, [1]);
assertArraysEqual(hello.l, [2, 3]);
assertArraysEqual(hello.o, [4]);
