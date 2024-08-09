---
title: Comments and Math Operators
description: Page description.
---

# {$frontmatter.title}

## Comments

Comments in JavaScript serve as notes or explanations within the code, allowing developers to describe what certain parts of the code are intended to do or to temporarily disable portions of the code without deleting them. They are ignored by the JavaScript interpreter, meaning they have no effect on the execution of the code. There are two types of comments in JavaScript: single-line comments and multi-line comments.

### Single-Line Comments

Single-line comments start with two forward slashes (`//`). Everything on the line after the `//` is considered a comment and is ignored by the JavaScript interpreter. These are useful for short notes or disabling a single line of code.

Example:
```javascript
// This is a single-line comment
console.log("Hello, world!"); // This line prints "Hello, world!" to the console
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

Remember, while comments are a great tool for explaining your code and making it more understandable, excessive or unnecessary commenting can clutter the code and potentially hide errors. Strive for a balance that improves readability and maintainability without overwhelming the reader with commentary.

## Math Operators

Mathematical operators in JavaScript are symbols that perform arithmetic operations on one, two, or three operands, and then return the result of that operation. JavaScript supports the standard set of mathematical operators found in most programming languages, including addition (+), subtraction (-), multiplication (*), division (/), modulus (%), exponentiation (**), and more. Here's a breakdown of how these operators work:

### Addition (+)
Adds two numbers together.
```javascript
let sum = 10 + 20; // sum = 30
```

### Subtraction (-)
Subtracts the second operand from the first.
```javascript
let difference = 20 - 10; // difference = 10
```

### Multiplication (*)
Multiplies two numbers together.
```javascript
let product = 10 * 20; // product = 200
```

### Division (/)
Divides the first operand by the second.
```javascript
let quotient = 100 / 20; // quotient = 5
```

### Remainder (%) (Modulus)
Returns the remainder left over when the first operand is divided by the second. Also known as the modulus operator.
```javascript
let remainder = 10 % 3; // remainder = 1
```

### Exponentiation (**)
Raises the first operand to the power of the second.
```javascript
let base = 2;
let exponent = 3;
let result = base ** exponent; // result = 8
```

### Increment (++x)
Increases the value of a variable by one.
```javascript
let x = 5;
x++; // x = 6
```

### Decrement (--x)
Decreases the value of a variable by one.
```javascript
let y = 5;
y--; // y = 4
```

### Unary Plus (+x)
Converts a value to a number. Useful for converting strings to numbers.
```javascript
let stringValue = "123";
let numberValue = +stringValue; // numberValue = 123
```

### Unary Minus (-x)
Negates a value or converts a value to a number.
```javascript
let positiveNumber = -(-10); // positiveNumber = 10
```
