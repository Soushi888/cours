console.log('Hello World');

// constantes globales
YEAR = 2022;
console.log(YEAR);

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
console.groupEnd();