# Rust lesson 1 - Variable

## Variable

A variable is a name that is used to store a value. In Rust, variables are immutable by default. This means that once a
value is bound to a name, you can't change it.

``` rust
let x = 5;
```

In the example above, the value `5` is bound to the name `x`. If we try to change the value of `x` to `6`, we get an error:

``` rust
x = 6;
```

```
error[E0384]: cannot assign twice to immutable variable `x`
 --> src/main.rs:2:1
    |
  1 | let x = 5;
    |     -
    |     |
    |     first assignment to `x`
    |     help: make this binding mutable: `mut x`
  2 | x = 6;
    | ^^^^^ cannot assign twice to immutable variable

error: aborting due to previous error
```

To make a variable mutable, we use the `mut` keyword:

``` rust
let mut x = 5;
x = 6;
```

## Shadowing

Rust allows us to "shadow" a variable by using the same name and repeating the `let` statement. This is useful when we
want to change the type of a variable. For example:

``` rust
let x = 5;
let x = x + 1;
let x = x * 2;
```

In the example above, the value of `x` is first bound to `5`. Then, we add `1` to it and bind it to `x` again. Finally,
we multiply it by `2` and bind it to `x` again. The final value of `x` is `12`.

## Constants

Constants are values that are bound to a name and that don't change. Constants are declared using the `const` keyword and must be annotated with their type:

``` rust
const MAX_POINTS: u32 = 100_000;
```

Constants can be declared in any scope, including the global scope. Constants may be set only to a constant expression, not the result of a function call or any other value that could only be computed at runtime.