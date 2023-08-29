import {find,cb} from "../find.js";

const items = [1, 2, 3, 4, 5, 5];

const answer = find(items,cb,32);
console.log(answer);
