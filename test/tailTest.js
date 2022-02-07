// Tests for tail.js

const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  
  it("does not modify the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"])
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it("returns an empty array for an array with one element", () => {
    const result = tail(['one element']);
    assert.deepEqual(result, []);
  });

  it("returns an empty array for an empty array", () => {
    const result = tail([]);
    assert.deepEqual(result, []);
  });
});