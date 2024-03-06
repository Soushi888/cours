# Rust lesson 5 - Conditions

## Basic if statements

An if statement in Rust has the following syntax:

``` rust
if condition {
// Code to run if condition is true
}
```

The `condition` is a boolean expression that determines whether the code inside the braces `{}` should be executed. If the condition is `true`, the code is executed. If the condition is `false`, the code is skipped.

``` rust
let x = 5;

if x == 5 {
    println!("x is equal to 5");
}
```

### if-else statements

An if-else statement in Rust has the following syntax:

``` rust
if condition {
// Code to run if condition is true
} else {
// Code to run if condition is false
}
```

The `condition` is a boolean expression that determines whether the code inside the first set of braces `{}` should be executed or the code inside the second set of braces `{}` should be executed. If the condition is `true`, the code inside the first set of braces is executed. If the condition is `false`, the code inside the second set of braces is executed.

``` rust
let x = 5;

if x == 5 {
    println!("x is equal to 5");
} else {
    println!("x is not equal to 5");
}
```

### if-else if-else statements

An if-else if-else statement in Rust has the following syntax:

``` rust
if condition1 {
// Code to run if condition1 is true
} else if condition2 {
// Code to run if condition1 is false and condition2 is true
} else {
// Code to run if condition1 and condition2 are false
}
```

The `condition1` and `condition2` are boolean expressions that determine which code should be executed. If `condition1` is `true`, the code inside the first set of braces `{}` is executed. If `condition1` is `false` and `condition2` is `true`, the code inside the second set of braces `{}` is executed. If both `condition1` and `condition2` are `false`, the code inside the third set of braces `{}` is executed.

``` rust
let x = 5;

if x == 5 {
    println!("x is equal to 5");
} else if x == 6 {
    println!("x is equal to 6");
} else {
    println!("x is not equal to 5 or 6");
}
```

### if-else as an expression

An if-else statement can be used as an expression. This means that it can be assigned to a variable. The type of the variable must be specified.

``` rust
let x = 5;

let result = if x == 5 {
    "x is equal to 5"
} else {
    "x is not equal to 5"
};

println!("{}", result); // x is equal to 5
```

### if-else as an expression with different types

An if-else statement can be used as an expression with different types. The type of the variable must be specified.

``` rust
let x = 5;

let result = if x == 5 {
    5
} else {
    "not 5"
};

println!("{}", result); // 5
```

### if-else as an expression with different types and a return value

An if-else statement canot be used as an expression with different types and a return value. The return value must be the same type as the other values.

``` rust
let x = 5;

let result = if x == 5 {
    "5"
} else {
    "not 5"
};

println!("{}", result); // 5
```

## match statements

A match statement in Rust is similar to a switch statement in other languages, but it is more powerful. A match statement has the following syntax:

``` rust
match value {
    pattern1 => code1,
    pattern2 => code2,
    pattern3 => code3,
    _ => code4,
}
```

The `value` is the value that is being matched against the patterns. The `pattern1`, `pattern2`, and `pattern3` are the patterns that are matched against the value. The `code1`, `code2`, and `code3` are the code that is executed if the pattern matches the value. The `_` is a catch-all pattern that matches any value. The `code4` is the code that is executed if the value does not match any of the patterns.

``` rust
let x = 5;

match x {
    1 => println!("x is equal to 1"),
    2 => println!("x is equal to 2"),
    3 => println!("x is equal to 3"),
    _ => println!("x is not equal to 1, 2, or 3"),
}
```

### match statements with multiple patterns

A match statement can have multiple patterns that match the same value. The code for the first pattern that matches the value is executed.

``` rust
let x = 5;

match x {
    1 | 2 => println!("x is equal to 1 or 2"),
    3 => println!("x is equal to 3"),
    _ => println!("x is not equal to 1, 2, or 3"),
}
```

### match statements with ranges

A match statement can have a range of values that match the same value. The code for the first pattern that matches the value is executed.

``` rust
let x = 5;

match x {
    1..=3 => println!("x is between 1 and 3"),
    4 => println!("x is equal to 4"),
    _ => println!("x is not between 1 and 3 or equal to 4"),
}
```

### match statements with destructuring

A match statement can have destructuring patterns. The code for the first pattern that matches the value is executed.

``` rust
let x = (1, 2);

match x {
    (1, y) => println!("x.0 is equal to 1 and x.1 is equal to {}", y),
    (a, b) => println!("x.0 is equal to {} and x.1 is equal to {}", a, b),
}
```

### match statements with guards

A match statement can have guards. The code for the first pattern that matches the value and the guard is executed.

``` rust
let x = 5;

match x {
    y if y < 5 => println!("x is less than 5"),
    y if y > 5 => println!("x is greater than 5"),
    _ => println!("x is equal to 5"),
}
```