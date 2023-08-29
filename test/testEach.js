import {each,cb} from "../each.js";

const items = [1, 2, 3, 4, 5, 5];

const answer = each(items,cb);
console.log(answer);
