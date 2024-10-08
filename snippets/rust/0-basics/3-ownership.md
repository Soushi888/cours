# Rust lesson [...] - Ownership

## Ownership

In Rust, memory is managed through a system of ownership with a set of rules that the compiler checks at compile time.

### The stack and the heap

All data stored in Rust is stored on the stack or the heap.

The stack is a data structure that stores data in the order it was received. When data is removed from the stack, it is removed in the opposite order it was received. The stack is fast because data can be easily added and removed, but it is limited in size.

The heap is less organized than the stack: data can be stored anywhere in memory. The heap is slower than the stack because data has to be searched for before it can be accessed, but it is unbounded in size.

### Ownership rules

The ownership rules are:

1. Each value in Rust has a variable that's called its owner.
2. There can only be one owner at a time.
3. When the owner goes out of scope, the value will be dropped.

### Variable scope

The scope of a variable is the region of code where the variable is valid. For example:

``` rust
fn main() {
    let x = 5; // x comes into scope

    // do stuff with x

} // x goes out of scope
```

In this example, `x` comes into scope when it is declared on line 2. It goes out of scope when it goes out of scope on line 5.

## References and borrowing

In some cases, you may want to allow multiple parts of your code to access a single piece of data without needing to copy that data into memory multiple times. In these cases, you can use references.

### References

A reference allows you to refer to some value without taking ownership of it. References are immutable by default. To create a mutable reference, you must use the `mut` keyword.

``` rust
struct Point {
  x: i32,
  y: i32,
}

fn main() {
  let x = Point { x: 1, y: 2 };
  let y = x;

  println!("x: {}, y: {}", x.x, y.x);
}
```

This code will not compile because `x` is moved to `y` on line 8. This means that `x` is no longer valid, and we cannot access it on line 9.

``` rust
struct Point {
  x: i32,
  y: i32,
}

fn main() {
  let x = Point { x: 1, y: 2 };
  let y = &x;

  println!("x: {}, y: {}", x.x, y.x);
}
```

This code will compile because `x` is not moved to `y`. Instead, `y` is a reference to `x`. This means that we can still access `x` on line 9.

### Mutable references

A mutable reference allows you to mutate a value without taking ownership of it. You can have multiple mutable references to a single value, but you can only have one mutable reference to a single value at a time.

``` rust
struct Point {
  x: i32,
  y: i32,
}

fn main() {
  let mut x = Point { x: 1, y: 2 };
  let y = &mut x;

  y.x = 3;

  println!("x: {}, y: {}", x.x, y.x);
}
```

This code will compile because `y` is a mutable reference to `x`. This means that we can mutate `x` through `y` on line 8.
