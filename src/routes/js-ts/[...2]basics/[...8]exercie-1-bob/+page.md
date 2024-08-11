---
title: Exercice 1 - Bob
description: In this exercise, you'll create a simple conversation simulator featuring Bob, a character with distinct responses to different types of interactions. Your task is to develop a program that interacts with Bob according to specific rules, using JavaScript's `prompt()` and `alert()` functions for user input and output. The simulation ends when the user decides to say "Goodbye!" or "Bye!".
---

# {$frontmatter.title}

In this exercise, you'll create a simple conversation simulator featuring Bob, a character with distinct responses to different types of interactions. Your task is to develop a program that interacts with Bob according to specific rules, using **JavaScript's** `prompt()` and `alert()` functions for user input and output. The simulation ends when the user decides to say "Goodbye!" or "Bye!".

This exercise aims to showcase your ability to implement conditional logic in **JavaScript**. Dive into the world of interactive programming and explore how **JavaScript** can be used to simulate human-like conversations.

## Instructions

Create a program that will carry on a conversation with Bob.

- Use `prompt()` to get the user's input.
- Based on the user's input, use `alert()` to display Bob's response.
- The program should end when the user says "Goodbye!" or "Bye!".
- The program should keep asking the user for input until then.

## Bob's Responses

- If the user asks a question (e.g., "How are you?"), Bob answers "Sure."
- If the user yells a question (e.g., "WHAT'S YOUR NAME?" in all caps), Bob answers "Whoa, chill out!"
- If the user doesn't say anything, Bob says "Fine. Be that way!"
- For any other statement, Bob simply says "Whatever."

## Tips

- Use a loop to keep the conversation going.
- Use the string methods to manipulate the user's input and check if it's a question, if it's in all caps or even to trim it.

## Solution

<details>
<summary>Click to read solution</summary>

```javascript
let conversationIsOn = true;

while (conversationIsOn) {
	let userInput = prompt('How are you?').trim();
	let response;

	if (userInput === '') {
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
```
</details>
