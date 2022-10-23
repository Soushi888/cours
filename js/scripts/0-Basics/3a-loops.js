"use strict"

// Loops
console.group("Loops");

// While loops
let i = 0;
while (i <= 10) {
	if (i % 2 === 0) console.log(i);
	i++; // i += 1 or i = i + 1
}

// Do While loops (execute at least once)
i = -2;
do {
	console.log(i);
	i++;
} while (i <= 3);

// For loops
for (let i = 0; i <= 3; i++) {
	console.log(i);
}

for (let i = 0; i <= 50; i += 10) {
	console.log(i);
}

// Indented for loops
for (let i = 0; i <= 3; i++) {
	console.group("i = " + i);
	for (let j = 0; j <= 3; j++) {
		console.log(`i = ${i}, j = ${j}`);
	}
	console.groupEnd();
}
console.groupEnd();


console.group("Iterating over an array");

let fruitArray = ["apple", "banana", "pamplemous", "cherry"]; // array of strings
let topThreeScores = [300, 295, 280]; // array of numbers

console.log(fruitArray);
console.log(topThreeScores);

// Iterating over arrays with for loops
for (let i = 0; i <= topThreeScores.length - 1; i++) {
	console.log(`#${i + 1} : ${topThreeScores[i]}`);
}

// Iterate over an array with for...of
for (let score of topThreeScores) {
	if (score === 300) continue; // continue skip the current iteration
	if (score > 300) {
		console.error("The score can not be greater than 300."); // console.error is used to display an error message
		break // stop the loop
	}

	console.log(score);
}

for (let fruit of fruitArray) {
	console.log(fruit);
}

// Iterate over an array with forEach
topThreeScores.forEach((score, i) => {
	console.log(`#${i + 1} : ${score}`);
});
console.groupEnd();

// Iterate over and return an array with map
let topThreeScoresDoubled = topThreeScores.map((score, i) => {
	return score * 2;
});
console.log(topThreeScoresDoubled);

// Iterate over and return an array with filter
let topThreeScoresGreaterThan280 = topThreeScores.filter((score, i) => {
	return score > 280;
});
console.log(topThreeScoresGreaterThan280);

// Iterate over and return a single value with reduce
let topThreeScoresSum = topThreeScores.reduce((accumulator, score, i) => {
	return accumulator + score;
});
console.log(topThreeScoresSum);