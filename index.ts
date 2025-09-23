// function pow(x: number, y: number): number {
// 	return x ** y;
// }
function pow(x: number, y: number): string {
	return `${x}**${y}=${x ** y}`;
}

// console.log(pow(4, 2));

const add = (x: number, y: number): number => x + y;

function someFunc(s: string): never {
	throw new Error();
}

// signature function
let c: (x: number, y: string) => string;
// c = function (a: number, b: string): number {
// 	return a + b;
// };

// c = function (a: number, b: string): string {
// 	return `${b}:${a}`;
// };
// console.log(c(3, 'Javob'));
function overloadFunc(x: number, y: number): number;
function overloadFunc(x: string, y: number): string;
function overloadFunc(x: any, y: any): any {
	if (typeof x === 'number' && typeof y === 'number') {
		return x + y;
	} else {
		return `${x} ${y}`;
	}
}

console.log(overloadFunc('Answer', 4));
