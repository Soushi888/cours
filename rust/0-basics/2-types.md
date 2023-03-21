# Rust lesson 2 - Types

Rust is a statically typed language. This means that the compiler must know the type of all variables at compile time.
In this lesson, we will learn about the different types that Rust has.

## Primitive types

Rust has 5 primitive types:

### Integer types

A integer, is a number without a fractional part. It means that it can be positive or negative, but it can't have a
decimal part. For example, `5` and `-5` are integers, but `5.0` is not.

Rust has 4 integer types: `i8`, `i16`, `i32`, `i64`, `i128` and `isize`. These types represent signed integers with 8,
16, 32, 64, 128 bits and the same size as the pointer on the target platform respectively. The `isize` type is the same
size as the pointer on the target platform. They are signed, which means that they can be positive or negative.

Rust also has 4 unsigned integer types: `u8`, `u16`, `u32`, `u64`, `u128` and `usize`. These types represent unsigned
integers with 8, 16, 32, 64, 128 bits and the same size as the pointer on the target platform respectively. The `usize`
type is the same size as the pointer on the target platform. They are unsigned, which means that they can only be
positive.

### Floating point types

A floating point number is a number with a fractional part. For example, `5.0` is a floating point number, but `5` is
not.

Rust has 2 floating point types: `f32` and `f64`. These types represent floating point numbers with 32 and 64 bits
respectively.

### Boolean type

A boolean type has only two possible values: `true` and `false`. It is usually used to represent logical values.

### Character type

A character type represents a single character. For example, `'a'` is a character.

### Compound types

Compound types can group multiple values into one type. Rust has two primitive compound types: tuples and arrays.

#### Tuples

A tuple is a collection of values of different types. Tuples have a fixed length: once declared, they cannot grow or
shrink in size.

``` rust
let my_tuple = (1, "Hello", true);
```

Tuples can be accessed using a period (`.`) followed by the index of the value. The first value has index `0`.

``` rust
let my_tuple = (1, "Hello", true);
let first_value = my_tuple.0; // 1
let second_value = my_tuple.1; // "Hello"
let third_value = my_tuple.2; // true
```

#### Arrays

An array is a collection of values of the same type. Arrays have a fixed length: once declared, they cannot grow or shrink in size.

``` rust
let my_array = [1, 2, 3];
```

Arrays can be accessed using square brackets (`[]`) followed by the index of the value. The first value has index `0`.

``` rust
let my_array = [1, 2, 3];
let first_value = my_array[0]; // 1
let second_value = my_array[1]; // 2
let third_value = my_array[2]; // 3
```

## Type inference

Rust is a statically typed language, which means that the compiler must know the type of all variables at compile time.
However, you don't always have to explicitly declare the type of a variable. The Rust compiler can usually infer the
type of a variable based on how you use it. This is called type inference.

``` rust
let x = 5; // x has type i32
let y = 6.0; // y has type f64
let z = true; // z has type bool
```

## Type annotations

In some cases, the Rust compiler is not able to infer the type of a variable. In these cases, you must explicitly
declare the type of the variable. This is called type annotation.

``` rust
let x: i32 = 5;
let y: f64 = 6.0;
let z: bool = true;
let array: [i32; 3] = [1, 2, 3]; // array with 3 elements of type i32
let tuple: (i32, f64, bool) = (1, 2.0, true); // tuple with 3 elements of type i32, f64 and bool
```