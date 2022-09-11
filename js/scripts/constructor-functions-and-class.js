"use strict";

// Object constructor
// The constructor is a function that is used to create objects of a same type.
function Person(name, age, profession) {
	this.name = name;
	this.age = age;
	this.profession = profession;

	this.birthday = function () {
		this.age++;
		console.log(`${this.name} is now ${this.age} years old.`);
	};
	this.changeProfession = (newProfession) => {
		this.profession = newProfession;
		console.log(`${this.name} is now a ${this.profession}.`);
	};
}

// create objects from the constructor function
let person4 = new Person("Sacha", 29, "Web Developer"); // new keyword is used to create a new object
let person5 = new Person("John", 30, "Web Designer");


// add a new property to the object
let address = {
	street: "123 Main Street",
	city: "New York",
	state: "NY",
	country: "USA",
	zip: "10001",
};
person4.address = address; // add a new property to the object
console.log(person4.address, person5.address); // work only for one object, not for all objects of the same type

// prototype
// The prototype is an object that is shared by all objects of the same type,
// and it's used to add properties and methods to all objects of the same type.
Array.prototype.first = function () {
	return this[0];
};
Array.prototype.last = function () {
	return this[this.length - 1];
};

let array = [1, 2, 3, 4, 5];
console.log(array.first(), array.last());


// add a new method to all Person objects
Person.prototype.changeName = function (newName) {
	console.log(`${this.name} is now ${newName}.`);
	this.name = newName;
};

person4.changeName("Sacha2");
console.log(person4);

// Object class
// The class is a template that is used to create objects of the same type.
class Person2 {
	// Constructor method is used to initialize the object properties when the object is created from the class.
	// The constructor method is called automatically when the new keyword is used to create a new object.
	constructor(name, age, profession, address = this.address) {
		this.name = name;
		this.age = age;
		this.profession = profession;
		this.address = address;
	}

	birthday() {
		this.age++;
		console.log(`${this.name} is now ${this.age} years old.`);
	}

	changeProfession(newProfession) {
		this.profession = newProfession;
		console.log(`${this.name} is now a ${this.profession}.`);
	}
}

// create objects from the class
let person6 = new Person2("Sacha", 29, "Web Developer");
console.log(person6);

let person7 = new Person2("John", 30, "Web Designer", address);
console.log(person7);

person6.birthday();
person7.changeProfession("Digital Marketer");

Person2.prototype.changeName = function (newName) {
	console.log(`${this.name} is now ${newName}.`);
	this.name = newName;
}
person7.changeName("John2");

let personPrototype = Person.prototype;
let person2Prototype = Person2.prototype;
console.log(personPrototype);
console.log(person2Prototype);