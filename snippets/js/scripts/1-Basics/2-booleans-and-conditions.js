// conditions
let display = false;
const userName = 'Sacha';
const isOk = true;

// if-else statement
if (isOk) {
	console.log("It's ok !");
} else {
	console.log("It's NOT ok !");
}

let majority;
const age = '55';

// else if statement
if (age >= 21) {
	majority = 'major';
} else if (age < 21) {
	majority = 'minor';
}

let stringNumber = '0';
// type coercion
if (stringNumber !== 0) {
	console.log('number is not 0 !');
}
if (parseInt(stringNumber) === 0) {
	console.log('number is 0 !');
}
if (+stringNumber === 0) {
	console.log('number is 0 !');
}

console.log(majority);

if (majority) {
	console.log(`${userName} is ${age} years old and he or she is a ${majority}.`);
}

// ternary operator (condition ? if_output : else_output)
isOk ? console.log("It's Ok !") : console.log("It's NOT Ok !");
majority = age >= 21 ? 'major' : 'minor';
majority && console.log(`${userName} is ${age} years old and he or she is a ${majority}.`);

// switch statement
switch (majority) {
	case 'major':
		console.log('You can drink in a bar.');
		break;
	case 'minor':
		console.log('You are not allowed to buy alcohol.');
		break;
	default:
		console.log(`Your majority is ${majority} because your age is "${age}".`);
}

// prompt and alert
if (display) {
	let answer = prompt('Hello human, how are you ?').trim();

	if (!answer) {
		alert("Hooo, you ignore me... :'(");
	} else if (answer === 'Hi !') {
		alert('Hello !');
	} else {
		alert("I don't understand, I'm just a simple bot.");
	}
}
