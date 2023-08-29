import flatten from "../flatten.js";
const nestedArray = [1, [2], [[3]], [[[4]]]];

const flatted = flatten(nestedArray);
console.log(flatted);