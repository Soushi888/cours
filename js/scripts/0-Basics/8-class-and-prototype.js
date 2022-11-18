"use strict";

// Object constructor
// A constructor is a function that is used to create objects of a same type.
function Person(name, age) {
	this.name = name;
	this.age = age;

	this.birthday = function () {
		this.age++;
		console.log(`${this.name} is now ${this.age} years old. 🎉`);
	};
}

// create objects from the constructor function
let person1 = new Person("Sacha", 29, "Web Developer"); // new keyword is used to create a new object
let person2 = new Person("John", 30, "Web Designer");

console.log(person1);
console.log(person2);
person1.birthday();

// add a new property to the object
let address = {
	street: "123 Main Street",
	city: "New York",
	state: "NY",
	country: "USA",
	zip: "10001",
};
person1.address = address; // add a new property to the object
console.log(person1.address, person2.address); // work only for one object, not for all objects of the same type


//--------------------------------------------------------------------------------------------------------------


// prototype
// The prototype is an object that is shared by all objects of the same type,
// and it's used to add properties and methods to all objects of the same type.
String.prototype.log = function () {
	console.log(this);
}

String.prototype.isEmpty = function () {
	return this.length === 0;
}

"Hello".log();
console.log("Hello".isEmpty());
console.log(" ".isEmpty());
console.log("".isEmpty());

`Hello Soushi, you have ${square(4)} emails !`.log();


Array.prototype.first = function () {
	return this[0];
};
Array.prototype.last = function () {
	return this[this.length - 1];
};

let array = [1, 2, 3, 4, 5];
console.log(array.first(), array.last()); // use new methods added to the prototype


// add a new method to all Person objects
Person.prototype.changeName = function (newName) {
	console.log(`${this.name} is now ${newName}.`);
	this.name = newName;
};

person1.changeName("Sacha2");


// --------------------------------------------------------------------------------------------


// Object class
// The class is a template that is used to create objects of the same type.
class Citizen {
	#privateProperty = "private property";
	static staticProperty = "static property";

	constructor(name, age, address = {}) {
		this.name = name;
		this.age = age;
		this.address = address;
		console.log(this.#privateProperty);
	}

	birthday() {
		this.age++;
		console.log(`${this.name} is now ${this.age} years old.`);
	}

	changeAddress(newAddress) {
		this.address = newAddress;
		console.log(`${this.name} now lives at ${this.address.city}.`);
	}

	static staticMethod() {
		console.log("static method");
	}
}

// create objects from the class
let person3 = new Citizen("Sacha", 29);
console.log(person3);
// console.log(person3.#privateProperty); // error: private properties are not accessible outside the class
console.log(Citizen.staticProperty); // static properties are accessible even without creating an object
Citizen.staticMethod(); // static methods are accessible even without creating an object

let person4 = new Citizen("John", 30, address);
console.log(person4);

person3.birthday();
person3.changeAddress({city: "Montreal"});

Citizen.prototype.changeName = function (newName) {
	console.log(`${this.name} is now ${newName}.`);
	this.name = newName;
}
person4.changeName("John2");

// compare the Person and Citizen prototypes
console.log(Person.prototype);
console.log(Citizen.prototype);


// --------------------------------------------------------------------------------------------


// object inheritance
class Employee extends Citizen {
	constructor(name, age, profession, address) {
		super(name, age, address); // super() is used to call the parent constructor
		this.profession = profession; // add new property
	}

	// override the parent method
	birthday() {
		super.birthday(); // super is used to call the parent method
		console.log("Happy birthday!"); // add new functionality
	}

	// add a new methods
	changeProfession(newProfession) {
		this.profession = newProfession;
		console.log(`${this.name} is now a ${this.profession}.`);
	};
}

let person5 = new Employee("Sacha", 31, "Web Developer", address);
console.log(person5);
person5.birthday();
person5.changeAddress({...person5.address, city: "Los Angeles"});
person5.changeProfession("Digital Marketer");
console.log(person5);