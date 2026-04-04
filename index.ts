// // Variable larni e'lon qilish

// let a: number; // yoki number=13 ds чам бо'лади
// a = 13;

// let b: string = 'matn';

// let c: boolean = true;

// let d: null = null; // null faqat null qabul qiladi boshqa qiymat olmaydi

// let e: undefined = undefined; // undefined faqt noma'lum qiymat qabul qiladi

// // let f: object = {};

// let f: { name: string } = { name: 'Davron' };
// f.name = 'Sardor';

// function pow(x: number, y: number): string {
// 	return `${x}**${y}=${x ** y}`;
// }
// console.log(pow(2, 3));

// let h: (x: number, y: string) => string;

// h = function (x: number, y: string): string {
// 	return `${x}: ${y}`;
// };
// // console.log('Javob', 2);
// function overLoadFunc(a: any, b: any): any {
// 	if (typeof a === 'number' && typeof b === 'number') {
// 		return a + b;
// 	} else {
// 		return `${a} ${b}`;
// 	}
// }
// console.log(overLoadFunc('Javob', 23));

// let a: any = 12;
// let b: number = a;

// let c: unknown = 56.67647;
// // let d: number= c

// let d: number = <number>c;
// let f: number = c as number;
// (c as number).toFixed(2);
// console.log(c);

// let h: number | string | boolean = 10;
// h = true;

// type Sizes = 'SM' | 'MD' | 'LG' | 'XXL' | boolean;
// let s2: Sizes = false;
// s2 = 'MD';
// s2 = 'LG';
// type OBJ = { name: string } | { age: number };
// let obj: OBJ;
// obj = { name: 'Davron' };
// obj = { age: 243 };
// obj = { name: 'hjsgfjhs', age: 232 };

// type OBJ3 = { name: string } & { age?: number };

// let obj3: OBJ3;

// obj3 = { name: 'Davron' };
// // obj3 = { age: 45 };
// // obj3 = { name: 'Davron', age: 40 };

// if ('age' in obj3) {
// 	console.log('Mavjud');
// } else {
// 	console.log('Mavjud emas');
// }

// let t: (number & string & boolean)[] = [32];
// let s: Array<number> = [];
// s = [1, 2, 4, 2, 3, 4, 5, 3, 4, 6];
//
// let a: Array<boolean | number | string> = [true, 5376, 'gfj'];

// let f: [number, string, boolean, number, string];

// f = [12, 'jkjshfk', true, 2345, 'sdfjh'];

// //  tuples bular aniq tartib va aniq type lar bilan ishlaydigan array
// enum Shopping {
// 	hat = 'HAT',
// 	boots = 'BOOTS',
// 	coat = 'COAT',
// 	water = 'WATER',
// }
// function buy(item: Shopping) {
// 	console.log(`You bought: ${item}`);
// }
// buy(Shopping.water);

// Enum oldindan belgilangan qiymatlar to'plami yani cheklangan variantlar bo'lsa enum ishlatiladi

// class Inson {
// 	_name: string = '';
// 	_age: number = 38;
// 	constructor(name: string, age?: number) {
// 		this._name = name;
// 		if (age !== undefined) {
// 			this._age = age;
// 		}
// 	}
// 	info(value: number): string {
// 		return `${this._name} kelasi yilda ${this._age + value} yoshda bo'ladi`;
// 	}
// 	get age() {
// 		return this._age;
// 	}
// 	set age(value: number) {
// 		if (value > 0) this._age = value;
// 	}
// }
// const davron: Inson = new Inson('Davron', 40);
// const Fotima: Inson = new Inson('Fotima');

// const Yusuf: Inson = new Inson('Yusuf', 6);
// const Imona: Inson = new Inson('Iymona', 9);
// console.log(davron.info(1));
// console.log(Fotima);
// console.log(Imona);
// console.log(Yusuf);

//  Agar classni ishida function yaratsak bu METOD deyiladi, Agar classdan tashqarida bo'lsa funksiya deyiladi.

// class Person {
// 	_name: string = '';
// 	_age: number = 0;

// 	constructor(name: string, age: number) {
// 		this._name = name;
// 		this._age = age;
// 	}
// 	sayHello(): string {
// 		return `Assalomu alaykum. Mening ismim ${this._name}`;
// 	}
// }

// class Workers extends Person {
// 	_group: string = '';
// 	_course: number = 0;

// 	constructor(name: string, age: number, group: string, course: number) {
// 		super(name, age);
// 		this._group = group;
// 		this._course = course;
// 	}
// }

// class Accountant extends Person {
// 	_todo: string[] = [];
// 	constructor(name: string, age: number, todo: string[]) {
// 		super(name, age);
// 		this._todo = todo;
// 	}
// }

// class Teacher extends Person {
// 	disciplines: string[] = [];

// 	constructor(name: string, age: number, disciplines: string[]) {
// 		super(name, age);
// 		this.disciplines = disciplines;
// 	}
// 	sayHello(): string {
// 		const parentMethod = super.sayHello();
// 		return `${parentMethod} Men ${this.disciplines[1]} fanidan dars beraman`;
// 	}
// }
// const davron: Person = new Person('Davron', 40);
// console.log(davron);
// console.log(davron.sayHello());

// const dilshod: Workers = new Workers('Dilshod', 46, '12-gurux', 12);
// console.log(dilshod);
// console.log(dilshod.sayHello());

// const newDilshod: Person = <Person>dilshod;

// console.log(newDilshod);
// console.log(newDilshod.sayHello());

// const abror: Teacher = new Teacher('Abror', 23, ['React', 'JS', 'TypeScrpt']);
// console.log(abror);
// console.log(abror.sayHello());

// const rasul: Accountant = new Accountant('Rasul', 48, [
// 	'Tax report',
// 	'Check employee',
// ]);
// console.log(rasul);
// console.log(rasul.sayHello());
//=================================================================
// class ResistorColor {
// 	COLORS: string[] = [
// 		'black',
// 		'brown',
// 		'red',
// 		'orange',
// 		'yellow',
// 		'green',
// 		'blue',
// 		'violet',
// 		'grey',
// 		'white',
// 	];

// 	colorCode(color: string): number {
// 		return this.COLORS.indexOf(color);
// 	}

// 	colors(): string[] {
// 		return this.COLORS;
// 	}
// }

// const resistor: ResistorColor = new ResistorColor();

// // console.log(resistor.colorCode('green'));
// // console.log(resistor.colors());

// //=================================================================
// //Pangramm (The quick brown fox jumps over the lazy dog.)
// export function isPangram(sentence: string): boolean {
// 	const letters = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ''));

// 	return letters.size === 26;
// }

// export const isPangarmArrow = (sentence: string): boolean =>
// 	new Set(sentence.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
// console.log(isPangarmArrow);
// //=================================================================
// export function toRna(dna: string): string {
// 	const map: { [key: string]: string } = {
// 		G: 'C',
// 		C: 'G',
// 		T: 'A',
// 		A: 'U',
// 	};
// 	return dna
// 		.split('')
// 		.map(letter => map[letter])
// 		.join('');
// }

// export const toRna2 = (dna: string): string =>
// 	dna
// 		.split('')
// 		.map(l => ({ G: 'C', C: 'G', T: 'A', A: 'U' })[l])
// 		.join('');
// //ASOSIY ECHIM SHU
// const DNAtoRNA = new Map<string, string>([
// 	['G', 'C'],
// 	['C', 'G'],
// 	['T', 'A'],
// 	['A', 'U'],
// ]);
// export function toRna3(dna: string): string {
// 	return [...dna]
// 		.map(l => {
// 			if (DNAtoRNA.has(l)) return DNAtoRNA.get(l);
// 			else throw new Error('Invalid input DNA.');
// 		})
// 		.join('');
// }
// class DNA {
// 	static toRNA1(dna: string): string {
// 		const map: Record<string, string> = {
// 			G: 'C',
// 			C: 'G',
// 			T: 'A',
// 			A: 'U',
// 		};
// 		return dna
// 			.split('')
// 			.map(n => map[n])
// 			.join('');
// 	}
// }
// // console.log(toRna('GCTA'));
// //=================================================================
// // ANIQ YECHIM
// export class DnDCharacter {
// 	strength: number;
// 	dexterity: number;
// 	constitution: number;
// 	intelligence: number;
// 	wisdom: number;
// 	charisma: number;

// 	hitpoints: number;

// 	constructor() {
// 		this.strength = DnDCharacter.generateAbilityScore();
// 		this.dexterity = DnDCharacter.generateAbilityScore();
// 		this.constitution = DnDCharacter.generateAbilityScore();
// 		this.intelligence = DnDCharacter.generateAbilityScore();
// 		this.wisdom = DnDCharacter.generateAbilityScore();
// 		this.charisma = DnDCharacter.generateAbilityScore();

// 		this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
// 	}
// 	public static generateAbilityScore(): number {
// 		let dice = [...Array(4)].map(_ => DnDCharacter.rollDie());
// 		dice.sort((a, b) => a - b);
// 		return dice.slice(1).reduce((a, b) => a + b);
// 	}
// 	public static rollDie(): number {
// 		return Math.floor(Math.random() * 6) + 1;
// 	}
// 	public static getModifierFor(score: number): number {
// 		return Math.floor((score - 10) / 2);
// 	}
// }
// //=================================================================
// //=================================================================
// export function hello(): string {
// 	return 'Hello, World!';
// }
// // Arrow function
// export const helloArrow = (): string => 'Hello, World!';
// //=================================================================
// class twoFer {
// 	_name: string = '';

// 	constructor(name: string) {
// 		this._name = name;
// 	}
// 	seyOneMe(): string {
// 		return `One for ${this._name}, One for me`;
// 	}
// }
// const forYou: twoFer = new twoFer('you');
// console.log(forYou.seyOneMe());

// export function twoFer2(name?: string): string {
// 	return `One for ${name || 'you'}, one for me`;
// }

// export function twoFer3(name: string = 'you'): string {
// 	return `One for ${name}, one for me.`;
// }
// // Arrow function

// export const twoFer4 = (name: string = 'you'): string =>
// 	`One for ${name}, one for me.`;

// // export const sdf=(name:string ='you'):string{
// //     return `One for${name}, one for me.`

// //=================================================================
// //=================================================================
// class Year {
// 	year: number;

// 	constructor(year: number) {
// 		this.year = year;
// 	}
// 	isLeap(): boolean {
// 		if (this.year % 4 !== 0) return false;
// 		if (this.year % 100 !== 0) return true;
// 		return this.year % 400 === 0;
// 	}
// }
// // const y1: Year = new Year(1997);
// // console.log(y1.isLeap());
// // const y2: Year = new Year(1900);
// // console.log(y2.isLeap());
// // const y3: Year = new Year(2000);
// // console.log(y3.isLeap());

// // Function type

// export function isLeap(year: number): boolean {
// 	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
// }
// // Arrow function
// export const isLeapArrow = (year: number): boolean =>
// 	(year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
// // console.log(isLeapArrow);

// // ==========================//================DARTS GAMES===========//============================

// export const score = (x = 0, y = 0) => {
// 	const cordinates = x ** 2 + y ** 2;
// 	return cordinates > 100 ? 0 : cordinates > 25 ? 1 : cordinates > 1 ? 5 : 10;
// };

// export class Darts {
// 	static score(x = 0, y = 0) {
// 		const cordinates = x ** 2 + y ** 2;
// 		return cordinates > 100 ? 0 : cordinates > 25 ? 1 : cordinates > 1 ? 5 : 10;
// 	}
// }

// function reversed(str: string): string {
// 	return str.split('').reverse().join('');
// }

// // ==========================//================LINE UP===========//============================

// export function format(name: string, number: number): string {
// 	let suffix = 'th';
// 	if (number % 100 < 11 || number % 100 > 13) {
// 		if (number % 10 === 1) suffix = 'st';
// 		else if (number % 10 === 2) suffix = 'nd';
// 		else if (number % 10 === 3) suffix = 'rd';
// 	}
// 	return `${name}, you are the ${number}${suffix} customer we serve today, Thank you!`;
// }

// // ==========================//================SPACE AGE PROBLEM===========//============================

// export const PLANENT: Record<string, number> = {
// 	mercury: 0.2408467,
// 	venus: 0.61519726,
// 	earth: 1.0,
// 	mars: 1.8808158,
// 	jupiter: 11.862615,
// 	saturn: 29.447498,
// 	uranus: 84.016846,
// 	neptune: 164.79132,
// };

// export function age(planetName: string, earthAge: number): number {
// 	const period = PLANENT[planetName];
// 	return +(earthAge / 35_557_600 / period).toFixed(2);
// }

// // ==========================//================REVERSE PROBLEM===========//============================

// export function reverse(str: string): string {
// 	return str.split('').reverse().join('');
// }

// export const teskari = (harf: string): string =>
// 	harf.split('').reverse().join('');

export function reversed(mgs: string): string {
	return [...mgs].reverse().join('');
}

// ==========================//================ BOB PROBLEMS ===========//============================
export function hey(message: string): string {
	const trimmed = message.trim();
	if (trimmed === '') {
		return 'Fine. Be that way!';
	}

	const lastChart = trimmed.charAt(trimmed.length - 1);
	const isQuestion = lastChart === '?';

	const hasLetters = trimmed.toLowerCase() !== trimmed.toUpperCase();
	const isYelling = trimmed === trimmed.toUpperCase() && hasLetters;
	if (isQuestion && isYelling) {
		return "Calm down, I know what I'm doing!";
	}
	if (isYelling) {
		return 'Whoa, chill out!';
	}
	if (isQuestion) {
		return 'Sure.';
	}
	return 'Whatever.';
}
