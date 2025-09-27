// // function pow(x: number, y: number): number {
// // 	return x ** y;
// // }
// function pow(x: number, y: number): string {
// 	return `${x}**${y}=${x ** y}`;
// }

// // console.log(pow(4, 2));

// const add = (x: number, y: number): number => x + y;

// function someFunc(s: string): never {
// 	throw new Error();
// }

// // signature function
// let c: (x: number, y: string) => string;
// // c = function (a: number, b: string): number {
// // 	return a + b;
// // };

// // c = function (a: number, b: string): string {
// // 	return `${b}:${a}`;
// // };
// // console.log(c(3, 'Javob'));
// function overloadFunc(x: number, y: number): number;
// function overloadFunc(x: string, y: number): string;
// function overloadFunc(x: any, y: any): any {
// 	if (typeof x === 'number' && typeof y === 'number') {
// 		return x + y;
// 	} else {
// 		return `${x} ${y}`;
// 	}
// }

// // console.log(overloadFunc('Answer', 4));

// type OBJ = { name: string } | { age: number };

// let obj: OBJ;
// obj = { name: 'Davron' };
// obj = { age: 39 };
// obj = { age: 39, name: 'Suyarov' };

// type OBJ2 = { name: string } & { age: number };
// let obj2: OBJ2;
// obj2 = { name: 'Sayyod', age: 30 };

// type OBJ3 = { name?: string; age?: number };

// let obj3: OBJ3;

// // obj3 = { name: 'Fotima', age: 37 };
// obj3 = { name: 'Soit' };

// if ('age' in obj3) {
// 	console.log('Bor');
// } else {
// 	console.log('Yoq');
// }
// ------------------------------//  Arrays Tuples & enum //--------------------------

let a = [];
// a=["sdsfsd", 23, {"djfhkjdf"}, true, undefined, null]

const d: number[] = [2, 2, 3, 4];

const f: Array<number> = [45, 67];

let g: [number, string];

g = [12, 'dsbfd'];

enum Gender {
	Male,
	Female = 'Fotima',
}

console.log(Gender.Female);
