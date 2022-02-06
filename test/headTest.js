// test/head.js

const head = require("../head");
const assertEqual = require("../assertEqual");

// Test Code

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([81]), 81);
assertEqual(head([]), undefined);