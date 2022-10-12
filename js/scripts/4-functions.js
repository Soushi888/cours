"use strict";
// Functions

// Function calls
function sayHi() { // functions names are in camelCase
	console.log('Hi !');
}

sayHi();

// Function calls with argument
function greetings(name) {
	console.log(`Hello ${name} !`);
}

greetings("Sacha");

// Function calls with optional arguments
function greetings2(name = "human") {
	console.log(`Hi ${name} !`);
}

greetings2();
greetings2("Soushi");

// Function calls with return
function add(num1, num2) {
	return num1 + num2;
}

console.log("1 + 2 = " + add(1, 2));

// Alternative syntax
const subtract = function (num1, num2) {
	return num1 - num2;
}
console.log("3 - 2 = " + subtract(3, 2));

// arrow function with multiple lines
const multiply = (num1, num2) => {
	return num1 * num2;
}
console.log("3 x 2 = " + multiply(3, 2));

// arrow function with one line (implicit return)
const divide = (num1, num2) => num1 / num2;
console.log("4 / 2 = " + divide(4, 2));

// arrow function with one argument
const square = num => num * num;
console.log("2² = " + square(2));

// arrow function with no argument
const sayGoodbye = () => console.log("Goodbye !");
sayGoodbye();

// example functions
function countAndEnumeratePeople(people) {
	const lastPerson = people.at(-1);
	console.log(`There are ${people.length} people in the party : ${people.join(", ")} and ${lastPerson}.`);
}
const people = ["Sacha Pignot", "Soushi888", "Shizore", "Shizoulfe"];
const people2 = ["Louis", "Mathilde", "Sacha", "Jean", "Rose", "Soushi"];
countAndEnumeratePeople(people);
countAndEnumeratePeople(people2);

function IsMajor(age) {
	return age >= 18;
}

let age = 24;
console.log(`With an age of ${age}, you are ${IsMajor(age) ? "major" : "minor"}.`);

// recursive function
function factorial(num) {
	if (num === 1) {
		return 1;
	}
	return num * factorial(num - 1);
}
console.log(factorial(5));

// IIFE (Immediately Invoked Function Expression)
(function () {
	console.log("IIFE");
})();

// IIFE with arguments
(function (name) {
	console.log(`Hello ${name} !`);
})("Soushi");

// callback function
function myForEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}
const quintuple = num => console.log(num * 5);

myForEach([1, 2, 3], quintuple);
[1,2,3].forEach(quintuple);

// closure (a function that remembers its lexical scope even when the function is executed outside that lexical scope)
function outer() {
	let counter = 0;
	function incrementCounter() {
		counter++;
	}
	incrementCounter();
	console.log(counter);
}
outer();

// closure that returns a function
function outer2() {
	let counter = 0;
	return function () {
		counter++;
		console.log(counter);
	}
}
const inner = outer2(); // inner is a function
inner();

// closure that returns a function with arguments
function outer3() {
	let counter = 0;
	return function (increment = 1) {
		counter += increment;
		console.log(counter);
	}
}
const inner2 = outer3();
inner2();
inner2(2);

// prototype
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
