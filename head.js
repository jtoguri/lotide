const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  console.log(`❌❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  return false
};

const head = function(arr) {
  return arr.length > 0 ? arr[0]: undefined;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([81]), 81);
assertEqual(head([]), "abc");