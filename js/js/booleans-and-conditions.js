// conditions
DISPLAY = false;
const name = "Sacha";
const isOk = true;

// if-else statement
if (isOk) {
	console.log("It's ok !");
} else {
	console.log("It's NOT ok !");
}

let status;
const age = "55";

// else if statement
if (age >= 21) {
	status = "major";
} else if (age < 21) {
	status = "minor";
}

console.log(status);

if (status) {
	console.log(`${name} is ${age} years old and he or she is a ${status}.`);
}

// ternary operator (condition ? if_output : else_ouput)
isOk ? console.log("It's Ok !") : console.log("It's NOT Ok !");
status = age >= 21 ? "major" : "minor";
status && console.log(`${name} is ${age} years old and he or she is a ${status}.`);


// switch statement
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


// prompt and alert
if (DISPLAY) {
	let answer = prompt("Hello human, how are you ?")

	if (!answer) {
		alert("Hooo, you ignore me... :'(");
	} else if (answer === "Hi !") {
		alert("Hello !");
	} else {
		alert("I don't understand, I'm just a simple bot.");
	}
}