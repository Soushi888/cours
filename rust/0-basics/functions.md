# Rust lesson [...] - Functions

In Rust, functions are used to group code together to perform a specific task. Functions can be called from other
functions or from the main function.

## Defining a function

A function in Rust has the following syntax:

``` rust
fn function_name(parameter1: type, parameter2: type) -> return_type {
    // code
}
```

The `fn` keyword is used to define a function. The function name is followed by a list of typed parameters. The
parameters are followed by a return type. The return type is followed by a block of code.

``` rust
fn main() {
    println!("Hello world!");
}
```

This function will print `Hello world!` when it is called.

``` rust
fn main() {
    let x = 5;
    let y = 6;

    let result = add(x, y);

    println!("{} + {} = {}", x, y, result);
}

fn add(x: i32, y: i32) -> i32 {
    x + y
}
```

A function can be called from another function or from the main function.

This function will print `5 + 6 = 11` when it is called.

## Function parameters

A function can have multiple parameters. The parameters are separated by a comma.

``` rust
// example function with multiple parameters, that format a string
fn main() {
    let name = "John";
    let age = 30;

    let result = format_string(name, age);

    println!("{}", result);
}

fn format_string(name: &str, age: i32) -> String {
    format!("My name is {} and I am {} years old.", name, age)
}
```

## Closures

A closure is a function that can be assigned to a variable or passed as a parameter to other functions.

Closure syntax:

``` rust
let closure_name = |parameter1, parameter2| {
    // code
};
```

``` rust
fn main() {
    let x = 5;
    let y = 6;

    let add = |x, y| x + y;

    let result = add(x, y);

    println!("{} + {} = {}", x, y, result);
}
```

### Closures as parameters

A closure can be passed as a parameter to another function.

``` rust
fn main() {
    let x = 5;
    let y = 6;

    let result = calculate(x, y, |x, y| x + y);

    println!("{} + {} = {}", x, y, result);
}

fn calculate(x: i32, y: i32, operation: fn(i32, i32) -> i32) -> i32 {
    operation(x, y)
}
```

In this example, the `calculate` function takes a closure as a parameter. The closure is called `operation`.

