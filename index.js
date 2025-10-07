'use strict';
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
// let a = [];
// // a=["sdsfsd", 23, {"djfhkjdf"}, true, undefined, null]
// const d: number[] = [2, 2, 3, 4];
// const f: Array<number> = [45, 67];
// let g: [number, string];
// g = [12, 'dsbfd'];
// enum Gender {
// 	Male,
// 	Female = 'Fotima',
// }
// // console.log(Gender.Female);
// class Inson {
// 	_name: string = 'Kamron';
// 	_age: number = 18;
// 	constructor(name: string, age: number) {
// 		this._name = name;
// 		this._age = age;
// 	}
// 	info(value: number): string {
// 		return `${this._name} - ${this._age + value} da`;
// 	}
// 	static isFlaying = false;
// 	static description(): string {
// 		return `Bu Klaslar haqida ma'lumot......`;
// 	}
// 	get name(): string {
// 		return this._name;
// 	}
// 	set name(value: string) {
// 		this.name = value;
// 	}
// 	get age(): number {
// 		return this._age;
// 	}
// 	set age(value: number) {
// 		if (value > 0 && value < 45) {
// 			this._age = value;
// 		} else {
// 			throw new Error('Siz bu yoshda emassiz!....');
// 		}
// 	}
// }
// const davron: Inson = new Inson('Davron', 39);
// const kamron: Inson = new Inson('Kamron', 18);
// console.log(davron.info(1));
// console.log(Inson.description());
// // davron.age = 44;
// davron.age = 46;
// console.log(davron._age);
// // console.log(kamron);
interface IPerson {
	_name: string;
	_age: number;
	sayHello(): string;
}
class Person implements IPerson {}
class Person {
	constructor(name, age) {
		this._name = '';
		this._age = 0;
		this._name = name;
		this._age = age;
	}
	sayHello() {
		console.log(`Assalomu alaykum Mening ismim ${this._name}!`);
	}
}
class Student extends Person {
	constructor(name, age, group, course) {
		super(name, age);
		this._group = '';
		this._course = 0;
		this._group = group;
		this._course = course;
	}
	sayHello() {
		const otaVoris = super.sayHello();
		return `${otaVoris} Men ${this._course}-kursning, ${this._group}da ta'lim olaman!`;
	}
}
class Teacher extends Person {
	constructor(name, age, subject) {
		super(name, age);
		this.subject = [];
		this.subject = subject;
	}
}
const umar = new Person('Umar', 3);
console.log(umar);
console.log(umar.sayHello());
const kamron = new Student('Kamron', 18, '334-group', 1);
console.log(kamron);
console.log(kamron.sayHello());
const newUmar = umar;
console.log(newUmar);
console.log(newUmar.sayHello());
const sayyod = new Teacher('Sayyod', 30, [
	'React',
	'Typescript',
	'JavaScript',
	'node.js',
]);
console.log(sayyod);
console.log(sayyod.sayHello());
//# sourceMappingURL=index.js.map
