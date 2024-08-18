---
title: Data types and variables
description: Unlock the secrets of JavaScript variables and operators with this detailed guide. Dive deep into the world of variables, exploring their role in storing and manipulating data. Understand the importance of data types, including numbers, strings, booleans, arrays, objects, null, and undefined, and how they shape your JavaScript programming. Learn about global variables, immutable variables, and mutable variables, and how to use them effectively in your code.
---

# {$frontmatter.title}

## Variables

A variable in programming is essentially a storage location in the computer's memory that has been assigned a **symbolic name**, which represents some known or unknown quantity of information referred to as a **value**. The variable name is the usual way to reference the stored value, in addition to referring to the variable itself, depending on the context. This separation of name and content allows the name to be used independently of the exact information it represents. The identifier in computer source code can be bound to a value during **run time**, and the value of the variable may thus change throughout the lifetime of a program.

The concept of variables is fundamental to almost all programming languages, as they provide a way to manipulate data dynamically. By storing data in variables, programs can process different inputs and produce varying outputs based on those inputs. 

Variables can hold various types of data, such as **numbers**, **strings**, or more complex structures, depending on the programming language. The ability to modify these values as a program runs is crucial for enabling programs to perform tasks, solve problems, and interact with users.

### Data types

In **JavaScript**, variables can hold different types of data, which are categorized into six primary types:

1. **Number**: Represents numeric values. **JavaScript** uses double-precision floating-point format for numbers, which includes both integers and decimal numbers. There are no separate integer types in **JavaScript**.

``` javascript
const num = 42; // Integer
const decimalNum = 9.99; // Decimal number or float (floating point)
```

2. **String**: Represents sequences of characters. Strings in **JavaScript** are immutable and can be created using single quotes (**'**), double quotes (**"**), or backticks (**`**).

``` javascript
const str = 'Hello, world!';
const anotherStr = "Another string";
const templateStr = `Template literal`;
```

**Template literals** are useful when you need to include variables in a string.

``` javascript
const name = 'John';
const greeting = `Hello, ${name}!`; 
console.log(greeting); // Output: "Hello, John!"
```

3. **Boolean**: Represents truthy or falsy values, specifically `true` or `false`.

``` javascript
const isTrue = true;
const isFalse = false;
```

4. **Array**: Represents ordered **lists of data**. Arrays can contain items of any type.

``` javascript
const fruits = ['Apple', 'Banana', 'Cherry'];
```

5. **Object**: Represents **collections of data and/or functionality**. Objects can be created using curly braces `{}` and can contain properties and methods.

``` javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};
```

6. **Null**: Represents the intentional absence of any object value. It is one of the falsy values in **JavaScript**.

``` javascript
const nothing = null;
```

7. **Undefined**: Represents a variable that has been declared but has not yet been assigned a value. It is another falsy value in **JavaScript**.

``` javascript
const something;
console.log(something); // undefined
```

These types form the basis of data handling in **JavaScript**, allowing developers to work with a wide range of data structures and values.

### Global variables

Global variables in **JavaScript** are variables that are defined outside of any function or block, allowing them to be accessed and modified from any part of the code. Historically, these variables were declared using the `var` keyword. However, due to modern best practices emphasizing better scope management and encapsulation, the use of var for declaring global variables is considered **deprecated**. Despite this, understanding global variables remains relevant as they continue to exist within the language and can be seen in older programs.

``` javascript
var a = 1;
console.log(a); // Outputs: 1
```

### Immutable variables

An immutable variable in **JavaScript** is a variable whose value cannot be changed once it has been assigned. Immutable variables are declared using the `const` keyword. When you declare a variable with `const`, you must initialize it with a value, and thereafter, any attempt to reassign a new value to this variable will result in a **JavaScript error**. This immutability helps prevent accidental modifications to the variable's value throughout the code, making the code easier to reason about and less prone to bugs.

It's important to note that the immutability of a `const` variable applies only to the binding itself, not necessarily to the content of the variable. For primitive values like **numbers**, **strings**, and **booleans**, this effectively makes them immutable because changing the value requires reassignment. However, for **objects** and **arrays**, while you cannot assign a new **object** or **array** to the variable, the properties or elements of the original **object** or **array** can still be modified.

``` javascript
// Declaring an immutable primitive value
const pi = 3.14159;
pi = 3.14; // Error: Assignment to constant variable.

// Declaring an immutable object
const person = { name: 'John', age: 30 };
person = { name: 'Jane', age: 25 }; // Error: Assignment to constant variable.

// Modifying the object's properties is allowed
person.name = 'Jane';
console.log(person); // Outputs: { name: 'Jane', age: 30 }

// Declaring an immutable array
const numbers = [1, 2, 3];
numbers[0] = 4; // Error: Assignment to constant variable.

// Modifying the array's elements is allowed
numbers.push(4);
console.log(numbers); // Outputs: [1, 2, 3, 4]
```

In the example above, attempting to reassign a new value to either pi or person results in an error because they are declared with `const`. However, modifying the properties of the person object is permitted because the immutability constraint applies to the variable binding, not the internal structure of **objects** or **arrays**.

 ### Mutable variables

In **JavaScript**, mutable variables are variables whose values can be changed after they have been initially assigned. Mutable variables allow for the modification of their content throughout the execution of the program. This contrasts with immutable variables, which, once assigned, retain the same value and cannot be altered.

Mutable variables can be declared using `var`, `let`, or `const` keywords, but their mutability depends on the type of value they hold. For primitive values (like **numbers**, **strings**, and **booleans**), even though the variable itself cannot be reassigned (if declared with `const`), the value it holds can still be changed. For **objects** and **arrays**, whether declared with `var`, `let`, or `const`, their contents can be modified because **objects** and **arrays** are reference types in **JavaScript**.

Here's an example to illustrate mutable variables:

``` javascript
// Mutable primitive value
let count = 0;
count = 5; // Allowed, changes the value of count

// Mutable object
const person = { name: 'Alice' };
person.name = 'Bob'; // Allowed, modifies the property of the object

// Mutable array
const fruits = ['apple'];
fruits.push('banana'); // Allowed, adds an element to the array
```

In the example above:

The `count` variable is mutable because its value is changed from `0` to `5`.
The person **object** is mutable; even though it's declared with `const`, its `name` property can be changed.
The `fruits` **array** is mutable; even though it's also declared with `const`, elements can be added to it.

This flexibility to modify the contents of variables is a fundamental aspect of **JavaScript**, allowing for dynamic and interactive programming.

## Additional resources

- MDN
  - [Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
  - [Storing the information you need — Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

- JavaScript Infos
  - [Structure](https://javascript.info/structure)
  - [Variables](https://javascript.info/variables)
  - [Data types](https://javascript.info/types)
  - [Data types list](https://javascript.info/data-types)

- W3Schools
  - [Variables](https://www.w3schools.com/js/js_variables.asp)
  - [Let](https://www.w3schools.com/js/js_let.asp)
  - [Const](https://www.w3schools.com/js/js_const.asp)
  - [Data types](https://www.w3schools.com/js/js_datatypes.asp)

- Tutorialspoint
  - [Variables](https://www.tutorialspoint.com/javascript/javascript_variables.htm)
  - [let Statement](https://www.tutorialspoint.com/javascript/javascript_let_statement.htm)
  - [Constants](https://www.tutorialspoint.com/javascript/javascript_constants.htm)
  - [Data types](https://www.tutorialspoint.com/javascript/javascript_data_types.htm)

- GeeksforGeeks
  - [JavaScript Variables](https://www.geeksforgeeks.org/javascript-variables/)
  - [Variables and Datatypes in JavaScript](https://www.geeksforgeeks.org/variables-datatypes-javascript/)