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
