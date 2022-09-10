"use strict"

// arrays
console.group("Arrays");
let fruitArray = ["apple", "banana", "pamplemous", "cherry"]; // array of strings
let topThreeScores = [300, 295, 280]; // array of numbers

let firstFruit = fruitArray[0]; // index starts at 0
let lastFruit = fruitArray[fruitArray.length - 1]; // last index = length - 1

let firstFruit2 = fruitArray.at(0); // index starts at 0
let lastFruit2 = fruitArray.at(-1); // last index = -1 or length - 1

console.log(fruitArray); // ["apple", "banana", "pamplemous", "cherry"]
console.log(fruitArray.length); // array length
console.log(`first fruit : ${firstFruit2}`); // apple
console.log(`second fruit : ${fruitArray[1]}`); // banana
console.log(`third fruit : ${fruitArray[2]}`); // pamplemous
console.log(`last fruit : ${lastFruit2}`); // cherry
console.log("is there a perfect score ?", topThreeScores.includes(300)); // include check if the array contain the indicated value

let topThreeScores2 = topThreeScores; // this is a reference to the array, not a copy
topThreeScores2[0] = 400;
console.log(topThreeScores); // the original array has been modified
topThreeScores2[0] = 300;

let topFourScores = topThreeScores.concat(277); // concat add a value to a new array
console.log("top four scores :", topFourScores);
let topFiveScores = [...topFourScores] // spread operator to copy an array (or an object) to another variable without reference to the original variable
topFiveScores.push(275); // push add a value to the array and return the new length of the array
console.log("top five scores :", topFiveScores);
let topSixScores = [...topFiveScores, 273]; // spread operator to add a value to the array
console.log("top six scores :", topSixScores);
let newBestScore = [301, ...topSixScores.slice(1, topSixScores.length)]; // slice return a new array with the values between the two index (excluded)
console.log("new best score :", newBestScore);
topSixScores.pop(); // remove the last value of the array and return it
console.log("top five scores again :", topSixScores);
let newTopThreeScores = newBestScore.slice(0, 3);
console.log("new top three scores :", newTopThreeScores);

let fruitArray2 = [...fruitArray];
fruitArray2.shift(); // remove the first value of the array and return it
console.log("fruit array without the first fruit :", fruitArray2);
fruitArray2.unshift("pear"); // add a value at the beginning of the array and return the new length of the array
console.log("fruit array with a new first fruit :", fruitArray2);

let fruitString = fruitArray.join(", "); // join return a string with the values of the array separated by the indicated separator
console.log(`The fruit selection of the days is : ${fruitString}.`);
let fruitArrayBack = fruitString.split(", "); // split return an array with the values of the string separated by the indicated separator
console.log("The fruit selection of the days is :", fruitArrayBack);


let mixedArray = [["apple", 300, true], ["banana", 295, false], ["pamplemous", 280, true]];
console.log(mixedArray); // array of arrays
console.log(mixedArray[0]); // first array
console.log(mixedArray[0][0]); // apple
console.log(mixedArray.at(-1)[0]); // pamplemous
console.groupEnd();

console.group("Loops");

// Loops

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

console.groupEnd();
console.group("Iterating over an array");
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
