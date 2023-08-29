import {reduce,cb} from "../reduce.js";

const items = [1, 2, 3, 4, 5, 5];

const defaultArgument = reduce(items,cb);
console.log(defaultArgument);

const answer = reduce(items,cb,3);
console.log(answer);
