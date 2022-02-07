// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const map = require('./map');
const without = require('./without');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqObjects = require('./eqObjects');

module.exports = {
  head,
  tail,
  middle,
  findKey,
  findKeyByValue,
  flatten,
  countLetters,
  countOnly,
  letterPositions,
  takeUntil,
  map,
  without,
  eqArrays,
  assertArraysEqual,
  assertObjectsEqual,
  eqObjects
};