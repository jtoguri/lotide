// Import the eqArrays function for use in eqObjects

const { eqArrays } = require('./index');

// Function that takes in two objects and returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  
  // Create arrays of the keys of both objects
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // If the objects do not have the same number of keys we know they can not be equal
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Iterate over the keys from the first object
  for (const key of keys1) {
    
    // If the value at both keys is an array we compare them using the eqArrays function and only return if they are not equal
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    
    // If the values were not arrays we check to see if they are both objects, if so we recursively call eqObjects on them and only return if a recursive eqObjects call does not evaluate to true
    else if (typeof object1[key] === 'object' && typeof object2[key] === 'object' && object1[key] !== null && object2[key] !== null) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } 
    
    // If the values were not arrays or objects we can just directly compare them and only return if they are not equal
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  // If we had no early returns we know they are equal and can return true
  return true;
};

module.exports = {
  eqObjects
};