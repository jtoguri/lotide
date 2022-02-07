// Test for middle.js

const middle = require("../middle.js");
const assert = require("chai").assert;

describe("#middle", () => {
  
  it("returns an empty array for an array with two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns an empty array for an array with one element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array for an empty array", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns an array containing the single middle element for an array with an odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns an array with the two middle elements for an array with an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});