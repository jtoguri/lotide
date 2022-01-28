// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  console.log(`❌❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  return false;
};

const countLetters = function(sentence) {
  let letterCount = {};
  
  for (const letter of sentence) {
    const stndLetter = letter.toLowerCase();
    if (stndLetter === letter.toUpperCase()) {
      continue;
    }
    if (letterCount[stndLetter]) {
      letterCount[stndLetter] += 1;
    }
    else {
      letterCount[stndLetter] = 1;
    }
  }

  return letterCount;
}

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("LHLllll"));