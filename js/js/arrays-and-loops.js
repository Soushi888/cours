// arrays
let fruitArray = ["apple", "banana", "pamplemous", "cherry"];
let topThreeScores = [300, 295, 280];

let firstFruit = fruitArray[0];
let lastFruit = fruitArray[fruitArray.length - 1];

let firstFruit2 = fruitArray.at(0);
let lastFruit2 = fruitArray.at(-1);

console.log(fruitArray);
console.log(fruitArray.length);
console.log(`first fruit : ${firstFruit}`);
console.log(`second fruit : ${fruitArray[1]}`);
console.log(`third fruit : ${fruitArray[2]}`);
console.log(`last fruit : ${lastFruit}`);
console.log("is there a perfect score ?", topThreeScores.includes(300));

console.log("--------------------------------------------");

let i = 0;
while (i <= 10) {
    if (i % 2 === 0) console.log(i);
    i++;
}

i = -5;
do {
    console.log(i);
    i++;
} while (i <= 5);

console.log("--------------------------------------------");

for (let i = 0; i <= topThreeScores.length - 1; i++) {
    console.log(`#${i + 1} : ${topThreeScores[i]}`);
}

for (score of topThreeScores) {
    console.log(score);
}

for (fruit of fruitArray) {
    console.log(fruit);
}

topThreeScores.forEach((score, i) => {
    console.log(`#${i + 1} : ${score}`);
})

fruitArray.forEach(fruit => console.log(fruit));