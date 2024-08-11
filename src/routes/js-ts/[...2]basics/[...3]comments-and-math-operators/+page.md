---
title: Comments and Math Operators
description: Page description.
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