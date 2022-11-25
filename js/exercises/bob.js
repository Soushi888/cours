"use strict";

let basicMessage = 'How are you?';
let bob = window.prompt(basicMessage);

let bobAnswer;

if (bob.endsWith('?') && bob !== bob.toUpperCase()) {
	bobAnswer = 'Sure.';
} else if (bob === bob.toUpperCase() && !bob.endsWith('?')) {
	bobAnswer = 'Whoa, chill out!';
} else if (bob === bob.toUpperCase() && bob.endsWith("?")) {
	bobAnswer = 'Calm down, I know what I\'m doing!';
} else if (bob === '') {
	bobAnswer = 'Fine. Be that way!';
} else {
	bobAnswer = 'Whatever.';
}

window.alert(bobAnswer);
