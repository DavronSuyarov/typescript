"use strict";
// function pow(x: number, y: number): number {
// 	return x ** y;
// }
function pow(x, y) {
    return `${x}**${y}=${x ** y}`;
}
// console.log(pow(4, 2));
const add = (x, y) => x + y;
function someFunc(s) {
    throw new Error();
}
// signature function
let c;
function overloadFunc(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else {
        return `${x} ${y}`;
    }
}
console.log(overloadFunc('Answer', 4));
//# sourceMappingURL=index.js.map