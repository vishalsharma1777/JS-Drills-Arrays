import {filter,cb} from "../filter.js";

const items = [1, 2, 3, 4, 5, 5];

const even = filter(items,cb);
console.log(even);
