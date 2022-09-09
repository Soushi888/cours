console.log('Hello World');

// const = immutable variable
const name = "Sacha";
console.log(name);
console.log("Your name is " + name);
console.log("Your name is", name);
console.log(`Your name is ${name}`);

// let = mutable variable
let total = 0;

total = total + 2;
console.log(total);

total += 6;
console.log(total);

// mathematics operators
console.group("operators")
const addition = 1 + 4;
console.log(`1 + 4 = ${addition}`);

const subtraction = 3 - 5;
console.log(`3 - 5 = ${subtraction}`);

const multiplication = 3 * 3;
console.log(`3 x 3 = ${multiplication}`);

const division = 50 / 2;
console.log(`50 / 2 = ${division}`);

const modulo = 23 % 10;
console.log(`23 % 10 = ${modulo}`);
console.groupEnd()

// conditions
const isOk = false;

if (isOk) {
	console.log("It's ok !");
}

let status;
const age = 100;

if (age >= 21 ) {
	status = "major";
} else if (age < 21) {
	status = "minor";
}

if (status) {
	console.log(`${name} is ${age} years old and he or she is a ${status}.`);
}

switch (status) {
	case "major":
		console.log("You can drink in a bar.");
		break;
	case "minor":
		console.log("You are not allowed to buy alcohol.")
		break;
	default:
		console.log(`Your status is ${status} because your age is "${age}".`)
}

// let answer = prompt("Hello human, how are you ?")
//
// if (!answer) {
// 	alert("Hooo, you ignore me... :'(");
// } else if (answer === "Hi !") {
// 	alert("Hello !");
// } else {
// 	alert("I don't understand, I'm just a simple bot.");
// }