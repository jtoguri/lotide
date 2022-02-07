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

module.exports = {
  head:            head,
  tail:            tail,
  middle:          middle,
  findKey:         findKey,
  findKeyByValue:  findKeyByValue,
  flatten:         flatten,
  countLetters:    countLetters,
  countOnly:       countOnly,
  letterPositions: letterPositions,
  takeUntil:       takeUntil,
  map:             map,
  without:         without
};