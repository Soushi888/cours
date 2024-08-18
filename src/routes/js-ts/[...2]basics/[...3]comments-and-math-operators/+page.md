---
title: Comments and basics Math operations
description: Dive into the fundamentals of JavaScript with this comprehensive guide covering comments, basic math operations, the Number object, and the Math object. Learn how to use comments effectively in your code, master essential math operators and their usage, explore the capabilities of the Number object for advanced number manipulation, and discover the utility of the Math object for complex mathematical computations. Whether you're a beginner looking to solidify your understanding or an experienced developer seeking a refresher, this guide offers valuable insights and examples to enhance your JavaScript skills.
---

# {$frontmatter.title}

## Comments

Comments in **JavaScript** serve as notes or explanations within the code, allowing developers to describe what certain parts of the code are intended to do or to temporarily disable portions of the code without deleting them. They are ignored by the **JavaScript** interpreter, meaning they have no effect on the execution of the code. There are two types of comments in **JavaScript**: single-line comments and multi-line comments.

### Single-Line Comments

Single-line comments start with two forward slashes (`//`). Everything on the line after the `//` is considered a comment and is ignored by the **JavaScript** interpreter. These are useful for short notes or disabling a single line of code.

Example:
```javascript
// This is a single-line comment
console.log("Hello, world!"); // This line prints "Hello, world!" to the console
// console.log("ignored code");
```

### Multi-Line Comments

Multi-line comments start with `/*` and end with `*/`. Any text placed between `/*` and `*/` is considered a comment, regardless of how many lines it spans. These are useful for longer descriptions or temporarily disabling blocks of code.

Example:
```javascript
/*
This is a multi-line comment.
It can span multiple lines.
*/
console.log("Hello, world!");
```

### Best Practices

- Use comments to explain why something is done a certain way, especially if it might not be obvious to others reading the code.
- Avoid commenting every line of code, as good code should be self-explanatory.
- Use comments to temporarily disable code blocks during debugging. Remember to remove or uncomment these lines before deploying your code to production.
- Keep comments up-to-date. Outdated comments can be misleading and confusing.
- You can use comments to temporarily disable code blocks during debugging.

Remember, while comments are a great tool for explaining your code and making it more understandable, excessive or unnecessary commenting can clutter the code and potentially hide errors. Strive for a balance that improves readability and maintainability without overwhelming the reader with commentary.

## Math Operators

Mathematical operators in **JavaScript** are symbols that perform arithmetic operations on one, two, or three operands, and then return the result of that operation. **JavaScript** supports the standard set of mathematical operators found in most programming languages, including addition (**+**), subtraction (**-**), multiplication (**\***), division (**/**), modulus (**%**), exponentiation (**\*\***), and more. Here's a breakdown of how these operators work:

### Addition (+)
Adds two numbers together.
```javascript
let sum = 10 + 20;
console.log(sum); // Output: 30
```

### Subtraction (-)
Subtracts the second operand from the first.
```javascript
let difference = 20 - 10;
console.log(difference); // Output: 10
```

### Multiplication (*)
Multiplies two numbers together.
```javascript
let product = 10 * 20;
console.log(product); // Output: 200
```

### Division (/)
Divides the first operand by the second.
```javascript
let quotient = 100 / 20;
console.log(quotient); // Output: 5
```

### Remainder (%) (Modulus)
Returns the remainder left over when the first operand is divided by the second. Also known as the modulus operator.
```javascript
let remainder = 10 % 3;
console.log(remainder); // Output: 1
```

### Exponentiation (**)
Raises the first operand to the power of the second.
```javascript
let base = 2;
let exponent = 3;
console.log(base ** exponent); // Output: 8
```

### Increment (++x) and Decrement (--x)
These operators are used to increment or decrement a variable by one.

#### Increment (++x)
Increases the value of a variable by one.
```javascript
let x = 5;
console.log(++x); // Output: 6
```

#### Decrement (--x)
Decreases the value of a variable by one.
```javascript
let y = 5;
console.log(--y); // Output: 4
```

#### Difference between ++x and x++ (or --x and x--)
The difference between `++x` and `x++` (as well as `--x` and `x--`) lies in the order of operation—specifically, whether the increment or decrement happens before (`pre-increment/pre-decrement`) or after (`post-increment/post-decrement`) the value of the variable is used in the expression.

- **Pre-increment (++x) / Pre-decrement (--x):** The variable is incremented/decremented first, and then its new value is used in the expression.
  
- **Post-increment (x++) / Post-decrement (x--):** The current value of the variable is used in the expression first, and then the variable is incremented/decremented.

Here's a quick example to illustrate:

``` javascript
let x = 5;
let y;

// Using post-increment
y = x++; // y gets the value of x (which is 5), THEN x is incremented to 6.
console.log(y); // Output: 5
console.log(x); // Output: 6

// Now, if we reset x to 5 again:
x = 5;

// Using pre-increment
y = ++x; // x is incremented FIRST to 6, THEN y gets this new value of x (which is now 6).
console.log(y); // Output: 6
console.log(x); // Output: 6
```

The same logic applies to decrement operations with `--x` and `x--`.

### Unary Plus (+x)
Converts a value to a number. Useful for converting strings to numbers.
```javascript
let stringValue = "123";
console.log(+stringValue); // Output: 123
```

### Unary Minus (-x)
Negates a value or converts a value to a number.
```javascript
let positiveNumber = -(-10);
console.log(positiveNumber); // Output: 10

negativeNumber = -"10";
console.log(negativeNumber); // Output: -10
```

### Combining Math Operators

When performing complex calculations in JavaScript, you'll often find yourself needing to combine multiple math operators in a single expression. Understanding how to correctly combine these operators and control their order of execution is crucial for achieving the desired result. This section will guide you through combining math operators effectively, with a focus on using parentheses to dictate the order of operations.

#### Order of Operations

JavaScript follows the standard mathematical order of operations, known as PEMDAS:

- Parentheses
- Exponents
- Multiplication and Division (from left to right)
- Addition and Subtraction (from left to right)

Parentheses play a special role in controlling the order of operations. They allow you to override the default precedence rules, ensuring that certain parts of an expression are evaluated before others.

#### Example Without Parentheses

Consider the following expression without parentheses:

```javascript
let result = 10 + 20 * 30;
console.log(result); // Output: 610
```

According to the order of operations, multiplication happens before addition, so `20 * 30` is calculated first, resulting in `600`. Then, `10` is added to `600`, giving a final result of `610`.

#### Example With Parentheses

Now, let's add parentheses to change the order of operations:

```javascript
let result = (10 + 20) * 30;
console.log(result); // Output: 900
```

By placing `10 + 20` inside parentheses, we force JavaScript to calculate this sum first, resulting in `30`. Then, `30` is multiplied by `30`, yielding a final result of `900`.

This example illustrates how parentheses can significantly alter the outcome of expressions involving multiple math operators. By carefully placing parentheses, you can ensure that calculations are performed in the exact sequence you intend, leading to accurate and predictable results in your JavaScript programs.

#### Practical Tips for Combining Math Operators

- Always start with the most straightforward part of the calculation and build complexity gradually.
- Use parentheses liberally to group related operations together and make the code easier to read and understand.
- Test your expressions with various inputs to ensure they behave as expected across different scenarios.
- Remember that excessive use of parentheses can sometimes obscure the intent of the code, so strive for a balance between clarity and conciseness.

By mastering the art of combining math operators and understanding the power of parentheses, you'll be well-equipped to tackle complex calculations in your JavaScript projects with confidence.

## The Number Object

The `Number` object in JavaScript is a wrapper object allowing you to work with numerical values. It provides properties and methods for formatting numbers as well as performing operations on them. Unlike primitive number values, `Number` objects can have methods.

Here are some key aspects of the `Number` object:

### Creating Number Objects

You can create a `Number` object using the `new` keyword followed by the `Number()` constructor. However, it's important to note that using the `Number` object is not always necessary because JavaScript automatically converts between string representations of numbers and numeric values when needed.

Example:
```javascript
let num = new Number(123); // Creates a Number object
let numPrimitive = 123; // A primitive number value
```

### Properties

The `Number` object has several properties that represent special numeric values, including:

- `Number.MAX_VALUE`: The largest positive number that can be represented.
- `Number.MIN_VALUE`: The smallest positive number that can be represented.
- `Number.NaN`: Represents "Not-a-Number" value.
- `Number.POSITIVE_INFINITY`: Positive infinity.
- `Number.NEGATIVE_INFINITY`: Negative infinity.
- `Number.EPSILON`: The difference between 1 and the smallest value greater than 1 that JavaScript can represent.

### Methods

The `Number` object also provides several methods for formatting and manipulating numbers, such as:

- `Number.isInteger()`: Determines whether the passed value is an integer.
- `Number.isNaN()`: Determines whether the passed value is NaN.
- `Number.isFinite()`: Determines whether the passed value is a finite number.
- `Number.isSafeInteger()`: Determines whether the passed value is a safe integer (i.e., an integer that can be exactly represented as a double).
- `Number.prototype.toFixed()`: Formats a number using fixed-point notation.
- `Number.prototype.toString()`: Returns a string representing the specified Number object.
- `Number.prototype.valueOf()`: Returns the primitive value of a Number object.

 In JavaScript, even though you primarily interact with primitive number values rather than `Number` objects, you can still access the properties and methods defined on `Number.prototype` directly from a primitive number value. This is possible because JavaScript automatically wraps the primitive number in a temporary `Number` object when you attempt to call a method on it, allowing you to use the methods defined on `Number.prototype`.

Example usage of methods:
```javascript
let num = 123.456;
console.log(num.toFixed(2)); // Outputs: "123.46"
console.log(Number.isInteger(num)); // Outputs: false
```

While the `Number` object provides useful properties and methods for working with numbers, it's often more common to work with primitive numeric values in JavaScript due to their simplicity and performance benefits. However, understanding the `Number` object can be beneficial for specific use cases, such as when you need to leverage its methods for formatting or validating numbers.

## The Math Object

The `Math` object in JavaScript is a built-in object that provides mathematical constants and functions. Unlike many other objects in JavaScript, `Math` is not a constructor and does not create objects. Instead, it serves as a namespace for mathematical functions and constants, meaning all of its properties and methods are static and can be accessed directly through the `Math` object itself without creating an instance of `Math`.

### Properties

The `Math` object contains several properties that represent mathematical constants, such as:

- `Math.PI`: The ratio of the circumference of a circle to its diameter, approximately 3.14159.
- `Math.E`: The base of natural logarithms, approximately 2.71828.
- `Math.LN2`, `Math.LN10`, `Math.LOG2E`, `Math.LOG10E`: Various logarithmic constants.
- `Math.SQRT2`, `Math.SQRT1_2`: Square root of 2 and square root of 1/2, respectively.

### Methods

The `Math` object provides a wide range of mathematical functions, including:

- **Arithmetic Operations**: Functions like `Math.abs()` for absolute value, `Math.ceil()` for rounding up, `Math.floor()` for rounding down, `Math.round()` for rounding to the nearest integer, and `Math.trunc()` for removing fractional digits.
  
- **Exponential and Logarithmic Functions**: Includes `Math.exp()` for exponentiation, `Math.log()` for natural logarithm, `Math.pow()` for raising to a power, `Math.sqrt()` for square root, and various others for hyperbolic functions.

- **Trigonometric Functions**: Functions like `Math.sin()`, `Math.cos()`, `Math.tan()`, `Math.asin()`, `Math.acos()`, `Math.atan()`, and their hyperbolic counterparts.

- **Other Utility Functions**: Such as `Math.max()` and `Math.min()` for finding the maximum and minimum of zero or more numbers, `Math.random()` for generating a random number between 0 and 1, and `Math.sign()` for determining the sign of a number.

Example usage of `Math` properties and methods:

```javascript
console.log(Math.PI); // Outputs: 3.141592653589793

let roundedUp = Math.ceil(4.2); // 5
console.log(roundedUp);

let randomNum = Math.random(); // Random number between 0 and 1
console.log(randomNum);

let maxVal = Math.max(1, 3, 7, 9); // 9
console.log(maxVal);
```

The `Math` object is a versatile tool in JavaScript for performing a wide range of mathematical operations and calculations, making it an essential part of many applications that require numerical processing.

## Additional Resources

- MDN
  - [Basic math in JavaScript — numbers and operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
  - [Number object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
  - [Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

- JavaScript Infos
  - [Basic operatos, math](https://javascript.info/operators)
  - [Number](https://javascript.info/number)
  - [Comments](https://javascript.info/comments)

- W3Schools
  - [Comments](https://www.w3schools.com/js/js_comments.asp)
  - [Operators](https://www.w3schools.com/js/js_operators.asp)
  - [Arithmetic](https://www.w3schools.com/js/js_arithmetic.asp)
  - [Numbers](https://www.w3schools.com/js/js_numbers.asp)
  - [Math](https://www.w3schools.com/js/js_math.asp)

- Tutorialspoint
  - [Comments](https://www.tutorialspoint.com/javascript/javascript_comments.htm)
  - [Operators](https://www.tutorialspoint.com/javascript/javascript_operators.htm)
  - [Arithmetic Operators](https://www.tutorialspoint.com/javascript/javascript_arithmetic_operators.htm)
  - [Number Object](https://www.tutorialspoint.com/javascript/javascript_number_object.htm)
  - [Math Object](https://www.tutorialspoint.com/javascript/javascript_math_object.htm)

- GeeksforGeeks
  - [Comments](https://www.geeksforgeeks.org/javascript-comments/)
  - [Arithmetic Operators](https://www.geeksforgeeks.org/javascript-arithmetic-operators/)
  - [Numbers](https://www.geeksforgeeks.org/javascript-numbers/)
  - [Math Object](https://www.geeksforgeeks.org/javascript-math-object/)
