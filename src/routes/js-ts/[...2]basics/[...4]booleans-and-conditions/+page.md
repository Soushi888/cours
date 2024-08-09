---
title: Booleans and Conditions
description: Master the fundamentals of JavaScript with our comprehensive guide on booleans and conditions. Dive deep into understanding how to declare booleans, utilize conditions like if, else if, and else, and explore advanced topics such as type coercion, strict comparison, ternary operators, switch statements, and user interaction techniques.
---

# {$frontmatter.title}

In JavaScript, booleans and conditions play a fundamental role in controlling the flow of programs through statements such as `if`, `else if`, and `else`. Here's how they work:

## Booleans

**What are Booleans?**

Booleans are the simplest data types in JavaScript, representing one of two values: `true` or `false`. They are used to represent truth values (or logic states) in programming.

**Declaring Booleans**

To declare a boolean variable, use the `let`, `const`, or `var` keyword followed by the variable name and assign it a value of either `true` or `false`.

``` javascript
let isTrue = true;
const isFalse = false;
```

## Conditions

Conditions allow your program to make decisions based on whether a statement evaluates to `true` or `false`. The most common way to use conditions is through the `if...else` statement.

### If-Else Statement

An `if` statement executes a block of code if a specified condition is `true`.

```javascript
const isOk = true;

if (isOk) {
    console.log("It's ok !");
} else {
    console.log("It's NOT ok !");
}
```

### Else If Statement

Use `else if` to check multiple conditions sequentially. An `else` statement specifies a block of code to execute if none of the preceding conditions are `true`.

```javascript
let majority;
const age = 55;

if (age >= 21) {
    majority = 'major';
} else if (age < 21) {
    majority = 'minor';
}

console.log(majority); // Outputs "major" or "minor" based on age
```

## Type Coercion and Strict Comparison

When comparing values in JavaScript, it's important to understand the difference between loose equality (`==`) and strict equality (`===`). The loose equality operator converts operands to a common type before making the comparison, which can lead to unexpected results due to JavaScript's automatic type conversion.

### Strict Equality Operator (`===`)

The strict equality operator (`===`) compares both the value and the type of the two operands. It returns `true` only if both values and types are identical. This means that no type coercion occurs, making it a safer choice for comparisons.

```javascript
let stringNumber = '0';

// Using strict equality operator
if (stringNumber === 0) {
    console.log('number is 0 !');
}

// Using loose equality operator
if (stringNumber == 0) {
    console.log('number is 0 !');
}
```

In this example, using `===` ensures that the comparison checks both value and type. Since `'0'` (a string) is not strictly equal to `0` (a number), the condition evaluates to `false`, and no message is logged.

### Strict Inequality Operator (`!==`)

The strict inequality operator (`!==`) works similarly to `===` but returns `true` when the operands are not equal or not of the same type. It's useful for checking that two values are different, including their types.

```javascript
let stringNumber = '0';

// Using strict inequality operator
if (stringNumber !== 0) {
    console.log('number is not 0 !');
}

// Using loose inequality operator
if (stringNumber != 0) {
    console.log('number is not 0 !');
}
```


Here, `!==` checks that `stringNumber` is neither equal to nor of the same type as `0`. Since `'0'` is not a number, the condition evaluates to `true`, and the message is logged.

In the seconde condition, `!=` loosely checks that the values are not equal. In this case, the condition evaluates to `false` and the message is not logged because when loosely comparing the values, type coercion is not performed and `'0'` equal `0`.

### Importance in Type Coercion

Understanding and using strict comparison operators is crucial when dealing with type coercion because they prevent JavaScript from automatically converting one data type to another before making the comparison. This can help avoid bugs and make your code more predictable and easier to debug.


## Ternary Operator

The ternary operator provides a shorthand way to write simple `if...else` statements. It evaluates a condition and executes one of two expressions depending on whether the condition is `true` or `false`.

```javascript
// Using a ternary operator
isOk ? console.log("It's Ok !") : console.log("It's NOT Ok !");
// Associate a ternary operator with a variable
majority = age >= 21 ? 'major' : 'minor';
```

## Switch Statement

A switch statement allows you to choose between many blocks of code to be executed based on a single expression.

```javascript
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
```

## Interaction with Users

JavaScript can interact with users through prompts (`prompt`) and alerts (`alert`). These methods allow you to ask for user input or display messages directly in the browser window.

- `prompt()`: This method allows you to prompt the user for input. It returns the input as a string. If the user cancels the prompt, it returns an empty string.
- `alert()`: This method displays an alert message in the browser window.

```javascript
    let answer = prompt('Hello human, how are you ?').trim();

    if (!answer) {
        alert("Hooo, you ignore me... :'(");
    } else if (answer === 'Hi !') {
        alert('Hello !');
    } else {
        alert("I don't understand, I'm just a simple bot.");
    }
```