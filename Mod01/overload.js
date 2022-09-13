"use strict";
function add(x, y) {
    if (typeof x === 'string') {
        return x + ' ' + y;
    }
    else {
        return x + y;
    }
}
let sum2 = add(10, 15);
let greeting = add("Hi", "Sarah");
// let bool = add(true, true);
// returns 25
