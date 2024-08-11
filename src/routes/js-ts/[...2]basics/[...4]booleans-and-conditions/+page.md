---
title: Booleans and Conditions
description: Master the fundamentals of JavaScript with our comprehensive guide on booleans and conditions. Dive deep into understanding how to declare booleans, utilize conditions like if, else if, and else, and explore advanced topics such as type coercion, strict comparison, ternary operators, switch statements, and user interaction techniques.
---

# {$frontmatter.title}

In **JavaScript**, booleans and conditions play a fundamental role in controlling the flow of programs through statements such as `if`, `else if`, and `else`. Here's how they work:

## Booleans

**What are Booleans?**

Booleans are the simplest data types in **JavaScript**, representing one of two values: `true` or `false`. They are used to represent truth values (or logic states) in programming. It's similar to `0` and `1` in binary.

**Declaring Booleans**

To declare a boolean variable, use the `let`, `const`, or `var` keyword followed by the variable name and assign it a value of either `true` or `false`.

``` javascript
let isTrue = true;
const isFalse = false;
```

## Conditions

Conditions allow your program to make decisions based on whether a statement evaluates to `true` or `false`. They use logical operators and comparison operators to determine the outcome of the program.

### Logical Operators

Logical operators are used to determine the logic between variables or values. They are typically used in conditional statements and loops. There are three primary logical operators in **JavaScript**:

1. **Logical AND (`&&`)**: Returns true if both operands are true. Otherwise, it returns false.
   
   ```javascript
   const a = true;
   const b = false;
   const c = true;
   
   console.log(a && b); // Output: false
   console.log(b && c); // Output: false
   console.log(a && c); // Output: true
   ```

2. **Logical OR (`||`)**: Returns true if at least one of the operands is true. It returns false only if both operands are false.
   
   ```javascript
   const a = true;
   const b = false;
   
   console.log(a || b); // Output: true
   console.log(b || b); // Output: false
   ```

3. **Logical NOT (`!`)**: Reverses the boolean value of the operand. If the operand is true, it returns false, and vice versa.
   
   ```javascript
   const a = true;
   
   console.log(!a); // Output: false
   ```

These operators are often used in combination with comparison operators (like `==`, `===`, `<`, `>`, `<=`, `>=`) to construct complex logical expressions. Logical operators can also be combined with each other to form compound conditions.

### Comparison Operators

Comparison operators are used to compare two values. The result of a comparison is a boolean value: `true` if the comparison is valid, and `false` otherwise. Comparison operators are commonly used in conditional statements to direct the flow of code based on the outcome of the comparisons. Here are the main comparison operators available in **JavaScript**:

1. **Equal (`==`)**: Checks if the values of two operands are equal or not. If yes, then the condition becomes `true`.
   
   ```javascript
   console.log(5 == 5); // Output: true
   console.log('5' == 5); // Output: true due to type coercion
   ```

2. **Not Equal (`!=`)**: Checks if the values of two operands are equal or not. If the values are not equal, then the condition becomes `true`.
   
   ```javascript
   console.log(5 != 3); // Output: true
   console.log('5' != 5); // Output: false due to type coercion
   ```

3. **Strict Equal (`===`)**: Checks if the values and the types of two operands are equal or not. If yes, then the condition becomes `true`.
   
   ```javascript
   console.log(5 === 5); // Output: true
   console.log('5' === 5); // Output: false because types are different
   ```

4. **Strict Not Equal (`!==`)**: Checks if the values or the types of two operands are equal or not. If they are not equal, then the condition becomes `true`.
   
   ```javascript
   console.log(5 !== 3); // Output: true
   console.log('5' !== 5); // Output: true because types are different
   ```

5. **Greater Than (`>`)**: Checks if the value of the left operand is greater than the value of the right operand. If yes, then the condition becomes `true`.
   
   ```javascript
   console.log(5 > 3); // Output: true
   ```

6. **Less Than (`<`)**: Checks if the value of the left operand is less than the value of the right operand. If yes, then the condition becomes `true`.
   
   ```javascript
   console.log(3 < 5); // Output: true
   ```

7. **Greater Than or Equal To (`>=`)**: Checks if the value of the left operand is greater than or equal to the value of the right operand. If yes, then the condition becomes `true`.
   
   ```javascript
   console.log(5 >= 5); // Output: true
   ```

8. **Less Than or Equal To (`<=`)**: Checks if the value of the left operand is less than or equal to the value of the right operand. If yes, then the condition becomes `true`.
   
   ```javascript
   console.log(5 <= 5); // Output: true
   ```

Logical and comparison operators are fundamental to controlling the flow of JavaScript programs, allowing developers to make decisions based on multiple conditions. Understanding how to effectively use these operators is crucial for writing robust and dynamic JavaScript code.


### Importance in Type Coercion

Understanding and using strict comparison operators (`===` and `!==`) is crucial when dealing with type coercion because they prevent **JavaScript** from automatically converting one data type to another before making the comparison. This can help avoid bugs and make your code more predictable and easier to debug.


### If-Else Statement

The most common way to use conditions is through the `if...else` statement.

An `if` statement executes a block of code if a specified condition is `true`. Otherwise, it executes the else block of code and continue the program. The `else` block is optional.

```javascript
const isOk = true;

if (isOk) {
    console.log("It's ok !");
} else {
    console.log("It's NOT ok !");
}

// Without else block
if (isOk) {
    console.log("It's ok !");
}

console.log("Executed whether isOk is true or false");
```

Here another example:

```javascript
let majority;
const age = 55;

if (age >= 21) {
    majority = true;
} else  {
    majority = false;
}

console.log(majority); // Output: true
```

In this kind of scenario you can also simply initialize the variable with false and only change it to true if the condition is met.

```javascript
let majority = false;
const age = 12;

if (age >= 21) {
    majority = true;
}

console.log(majority); // Output: false
```


### Else If Statement

Use `else if` to check multiple conditions sequentially. An `else` statement at the end of the chain specifies a block of code to execute if none of the preceding conditions are `true`. It's useful when you want to check multiple conditions in a single if statement.

```javascript
const gradePercentage = 85;

if (gradePercentage >= 90) {
  console.log("A");
} else if (gradePercentage >= 80 && gradePercentage < 90) {
  console.log("B");
} else if (gradePercentage >= 70 && gradePercentage < 80) {
  console.log("C");
} else if (gradePercentage >= 60 && gradePercentage < 70) {
  console.log("D");
} else {
  console.log("F");
}
```

In this example:

- The first condition checks if `gradePercentage` is greater than or equal to 90. If this condition is `true`, it logs "A" and skips the rest of the conditions.
- If the first condition is `false`, it moves to the next `else if` statement, checking if `gradePercentage` is between 80 and less than 90. If this condition is `true`, it logs "B".
- This process continues through each `else if` statement until a `true` condition is found or all conditions have been checked.
- If none of the `else if` conditions are met, the final `else` block is executed, logging "F".

This structure allows for efficient and readable conditional logic, especially when dealing with multiple conditions that lead to different outcomes.


## Ternary Operator

In JavaScript, the ternary operator is a concise way to perform an if-else statement in a single line of code. It's called the "ternary" operator because it takes three operands: a condition to check, a result for `true`, and a result for `false`. The syntax for the ternary operator is as follows:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

Here's how it works:

1. **Condition**: This is any expression that evaluates to a boolean value (`true` or `false`).
2. **ExpressionIfTrue**: This expression is executed and its result is returned if the condition evaluates to `true`.
3. **ExpressionIfFalse**: This expression is executed and its result is returned if the condition evaluates to `false`.

### Example Usage

Let's say you want to assign a value to a variable based on a condition. For instance, determining whether a person is considered an adult based on their age:

```javascript
const age = 23;
const status = age >= 21 ? 'Adult' : 'Minor';
console.log(status); // Output: Adult
```

In this example, the condition checks if `age` is greater than or equal to 21. Since the condition is `true`, the string `'Adult'` is assigned to the variable `status`. If the condition were `false`, `'Minor'` would be assigned instead.

The ternary operator is particularly useful for making quick decisions between two values based on a condition. It can make your code more concise and readable, especially for simple conditional assignments or expressions. However, for more complex conditions or actions, using traditional `if-else` statements might be clearer.

### The `&&` and `??` operators

The `&&` and `??` operators can indeed be used in ways that resemble the ternary operator, although they don't exactly replicate its functionality. Instead, they offer alternative approaches for handling conditions and providing default values. Let's explore how each can be used in a context similar to a ternary operation.

#### Using `&&` Operator

The `&&` operator can be used to execute one of two expressions based on a condition, somewhat akin to a ternary operation. This approach is particularly useful when you want to execute an expression only if a preceding condition is `true`.

```javascript
let isLoggedIn = true;
let greeting = isLoggedIn && 'Welcome back!';
console.log(greeting); // Output: Welcome back!

isLoggedIn = false;
greeting = isLoggedIn && 'Welcome back!';
console.log(greeting); // Output: (empty string, since isLoggedIn is false)
```

In this example, if `isLoggedIn` is `true`, the string `'Welcome back!'` is assigned to `greeting`. If `isLoggedIn` is `false`, `greeting` remains unchanged (in this case, it would be an empty string or whatever its initial value was).

#### Using `??` Operator

The `??` operator, known as the nullish coalescing operator, can be used to provide a default value for a variable that may be `null` or `undefined`. While it doesn't directly mimic the ternary operator's functionality, it can be used in a way that resembles setting a default value based on a condition.

```javascript
const name = null;
const displayName = name ?? 'Guest';
console.log(displayName); // Output: Guest
```

In this example, if `name` is `null` or `undefined`, `displayName` will be set to `'Guest'`. If `name` has any other value (even an empty string or zero), `displayName` will take that value.

#### Combining `&&` and `??` for Ternary-Like Behavior

While neither `&&` nor `??` alone perfectly replicates the ternary operator, they can be combined to achieve a similar effect, especially when you want to provide a default value based on a condition:

```javascript
let isLoggedIn = true;
let greeting = isLoggedIn && 'Welcome back!' ?? 'Please log in.';
console.log(greeting); // Output: Welcome back!

isLoggedIn = false;
greeting = isLoggedIn && 'Welcome back!' ?? 'Please log in.';
console.log(greeting); // Output: Please log in.
```

In this combined usage, if `isLoggedIn` is `true`, the expression `'Welcome back!'` is evaluated. If it's `false`, the expression after the `??` operator, `'Please log in.'`, is used instead. This approach leverages the strengths of both operators to create a flexible way to handle conditional logic and default values.

### Nested Ternary Operators

Nested ternary operators offer a more succinct method for expressing nested conditional logic. They excel for straightforward, inline decision-making but can rapidly lose readability with extensive use.

```javascript
const temperature = 32;
const message =
	temperature < 0
		? "It's freezing!"
		: temperature < 15
			? "It's cold!"
			: temperature < 25
				? "It's mild!"
				: "It's warm!"; // equivalent to the final else block
console.log(message); // Output: It's mild!
```

In this nested ternary operator example, each ternary expression is nested within the condition of the previous one, enabling multiple conditions to be assessed in a single line.

## Multidimensional Conditions

Multidimensional conditions involve embedding conditional statements within each other, allowing for complex decision-making processes based on multiple criteria. This technique is useful when the logic requires evaluating several aspects of a situation, where each aspect's outcome influences further evaluations.

### Example: Weather Forecast Application

Imagine you're developing a weather forecast application that provides users with tailored advice based on the current weather conditions. The application considers two main factors: the current temperature and the weather condition (sunny, rainy, cloudy, etc.).

```javascript
const currentTemperature = 75; // in Fahrenheit
const weatherCondition = 'sunny';

if (currentTemperature < 50) {
    if (weatherCondition === 'rainy') {
        console.log("Wear warm clothes and carry an umbrella.");
    } else if (weatherCondition === 'cloudy') {
        console.log("Wear comfortable clothing and prepare for light rain.");
    } else {
        console.log("Wear warm clothes as it's chilly.");
    }
} else if (currentTemperature >= 50 && currentTemperature < 80) {
    if (weatherCondition === 'sunny') {
        console.log("Wear light clothing and enjoy the sunshine.");
    } else if (weatherCondition === 'cloudy') {
        console.log("Wear comfortable clothing, it's a good day for outdoor activities.");
    } else {
        console.log("Carry an umbrella, it might rain.");
    }
} else { // currentTemperature >= 80
    if (weatherCondition === 'sunny') {
        console.log("Stay hydrated and wear lightweight clothing.");
    } else if (weatherCondition === 'cloudy') {
        console.log("Wear light clothing, it's hot out there.");
    } else {
        console.log("Wear waterproof clothing and carry an umbrella.");
    }
}
```

In this example, the outer `if` statement checks the current temperature to determine the general advice category (cold, moderate, or hot). Based on the temperature range, the program enters a different branch of logic. Within each branch, there's another `if` statement to check the weather condition, providing specific advice tailored to both the temperature and the weather.

### Considerations for Multidimensional Conditions

- **Complexity**: As the number of dimensions and conditions increase, the code becomes more complex and potentially harder to debug. It's essential to keep the logic as simple and modular as possible.
- **Maintainability**: Deeply nested structures can make future modifications challenging. Keeping each condition focused on a single aspect of the problem makes the code easier to update.
- **Readability**: Multidimensional conditions can reduce readability, especially for those unfamiliar with the codebase. Clear naming conventions and comments can help mitigate this issue.

Remember, while multidimensional conditions can be powerful, they should be used judiciously to avoid complicating your code unnecessarily.

## Switch Statement

A `switch` statement is a control flow statement used to perform different actions based on different conditions. It's similar to using a series of `if-else` statements but provides a more concise and readable syntax when dealing with multiple conditions that depend on the value of a single expression.

The basic structure of a `switch` statement includes a `switch` keyword followed by an expression in parentheses. Inside the curly braces `{}`, you define one or more `case` clauses, each starting with the `case` keyword followed by the value to compare against the switch expression. Each `case` ends with a `break` statement, which exits the `switch` block. Optionally, you can include a `default` clause at the end, which acts as a catch-all for none of the cases matching the switch expression.

Here's a simple example to illustrate how a `switch` statement works:

```javascript
let pokemonChosen = 'Pikachu';

switch (pokemonChosen) {
    case 'Bulbasaur':
        console.log('Bulbasaur is chosen. It\'s a Grass/Poison type.');
        break;
    case 'Charmander':
        console.log('Charmander is chosen. It\'s a Fire type.');
        break;
    case 'Pikachu':
        console.log('Pikachu is chosen. It\'s an Electric type.');
        break;
    case 'Eevee':
        console.log('Eevee is chosen. It\'s a Normal type.');
        break;
    default:
        console.log('Unknown Pokémon.');
}
```

In this example, the `switch` statement evaluates the variable `pokemonChosen`. Depending on its value, it prints a message describing the chosen Pokémon along with its type(s). For instance, if `pokemonChosen` is `'Pikachu'`, the output will be "Pikachu is chosen. It's an Electric type."

Key points about `switch` statements in JavaScript:

- **Expression Matching**: The `switch` statement compares the switch expression's value against the values specified in each `case`.
- **Strict Comparison**: Uses strict comparison (`===`) between the switch expression and the case values.
- **Falling Through**: If a `break` statement is omitted, execution will continue into the next case, executing all subsequent cases until a `break` is encountered or the end of the `switch` block is reached.
- **Default Case**: Optional. Specifies actions to take if no case matches the switch expression.
- **Nesting**: Can be nested within other control structures like loops and conditional statements.
- **Performance**: Generally faster than a series of `if-else` statements for a large number of conditions because it doesn't evaluate expressions after finding a match.

`switch` statements are particularly useful for simplifying code that performs different actions based on the value of a single variable or expression.

## Example: Interaction with Users

**JavaScript** can interact with users through prompts (`prompt`) and alerts (`alert`). These methods allow you to ask for user input or display messages directly in the browser window.

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