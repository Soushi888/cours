// "use strict";

// let conversationIsOn = true;

// while (conversationIsOn) {
//   let basicMessage = "How are you?";
//   let bob = window.prompt(basicMessage);

//   let bobAnswer;
//   if (bob.endsWith("?") && bob !== bob.toUpperCase()) {
//     bobAnswer = "Sure.";
//   } else if (bob === "") {
//     bobAnswer = "Fine. Be that way!";
//   } else if (bob === bob.toUpperCase() && !bob.endsWith("?")) {
//     bobAnswer = "Whoa, chill out!";
//   } else if (bob === bob.toUpperCase() && bob.endsWith("?")) {
//     bobAnswer = "Calm down, I know what I'm doing!";
//   } else if (bob === "Goodbye") {
//     bobAnswer = "Goodbye.";
//     conversationIsOn = false;
//   } else {
//     bobAnswer = "Whatever.";
//   }

//   window.alert(bobAnswer);
// }

let conversationIsOn = true;

while (conversationIsOn) {
	let userInput = prompt('How are you?');
	let response;

	if (userInput === '' || userInput === ' ') {
		response = 'Fine. Be that way!';
	} else if (userInput.toUpperCase() === userInput) {
		response = 'Whoa, chill out!';
	} else if (userInput.endsWith('?')) {
		response = 'Sure.';
	} else if (userInput === 'Goodbye') {
		response = 'Goodbye.';
		conversationIsOn = false;
	} else {
		response = 'Whatever.';
	}

	alert(response);
}

alert('Goodbye!');
