"use strict";
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
const d = [2, 2, 3, 4];
const f = [45, 67];
let g;
g = [12, 'dsbfd'];
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender["Female"] = "Fotima";
})(Gender || (Gender = {}));
// console.log(Gender.Female);
class Inson {
    constructor(name, age) {
        this._name = 'Kamron';
        this._age = 18;
        this._name = name;
        this._age = age;
    }
    info(value) {
        return `${this._name} - ${this._age + value} da`;
    }
    static description() {
        return `Bu Klaslar haqida ma'lumot......`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this.name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0 && value < 45) {
            this._age = value;
        }
        else {
            throw new Error('Siz bu yoshda emassiz!....');
        }
    }
}
Inson.isFlaying = false;
const davron = new Inson('Davron', 39);
const kamron = new Inson('Kamron', 18);
console.log(davron.info(1));
console.log(Inson.description());
// davron.age = 44;
davron.age = 46;
console.log(davron._age);
// console.log(kamron);
//# sourceMappingURL=index.js.map