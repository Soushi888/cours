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

// destructuring an array
let [firstScore, secondScore, thirdScore] = topThreeScores;
console.log(firstScore, secondScore, thirdScore);

let topThreeScores2 = topThreeScores; // this is a reference to the array, not a copy
topThreeScores2[0] = 400;
console.log(topThreeScores); // the original array has been modified
topThreeScores2[0] = 300;

let topFourScores = topThreeScores.concat(277); // concat add a value to a new array
console.log("top four scores :", topFourScores);
let topFiveScores = [...topFourScores] // spread operator to copy an array (or an object) to another variable without reference to the original variable
topFiveScores.push(275); // push add a value to the array and return the new length of the array
console.log("top five scores :", topFiveScores);
let topSixScores = [...topFiveScores, 273]; // spread operator to add a value to the array. This is equivalent to topFiveScores.concat(273)
console.log("top six scores :", topSixScores);

let [, ...restOfTopSixScores] = topSixScores; // destructuring an array to get the first value and the rest of the array
let newBestScore = [301, ...restOfTopSixScores]; // change the first value of the array
console.log("new best score :", newBestScore);

let topSixScores2 = [...topSixScores];
topSixScores2[0] = 301; // change the first value of the array


topSixScores.pop(); // remove the last value of the array and return it
console.log("top five scores again :", topSixScores);

let fruitArray2 = [...fruitArray];
fruitArray2.shift(); // remove the first value of the array and return it
console.log("fruit array without the first fruit :", fruitArray2);
fruitArray2.unshift("pear"); // add a value at the beginning of the array and return the new length of the array
console.log("fruit array with a new first fruit :", fruitArray2);

let newTopThreeScores = newBestScore.slice(0, 3); // slice return a new array with the values between the two index (excluded)
let newBestScore2 = [301, ...topSixScores.slice(1, topSixScores.length)];
console.log("new top three scores :", newTopThreeScores);

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

let randomScores = [90, 80, 95, 85, 75, 70, 60, 100, 50, 40, 30, 20, 10];
console.log("random scores :", randomScores);
randomScores.sort(); // sort the array
console.log("random scores sorted :", randomScores);

let randomScores2 = [...randomScores];
randomScores2.sort((a, b) => a - b); // sort the array with a function
console.log("random scores sorted with a function :", randomScores2);
randomScores2.reverse(); // reverse the array
console.log("random scores sorted and reversed :", randomScores);
