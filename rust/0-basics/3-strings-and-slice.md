# Rust lesson 3 - Strings and Slice

## Strings

In Rust, a String is a growable, heap-allocated data structure that represents a UTF-8 encoded string of text. You can create a String in several ways:

``` rust
// Creating an empty string
let mut s1 = String::new();

// Creating a string from a string literal
let mut s2 = String::from("hello");

// Creating a string by appending to an existing string
s2.push_str(", world!");

// Creating a string from a character iterator
let s3: String = ['h', 'e', 'l', 'l', 'o'].iter().collect();

// Creating a string from a byte vector
let s4 = String::from_utf8(vec![104, 101, 108, 108, 111]).unwrap();
```

Note that a String is mutable by default (let mut s = String::new();), and you can add more text to it using the push_str method.

One of the reasons String works differently in Rust is because Rust is a statically-typed language with a focus on safety and performance. This means that the size of a String must be known at compile time, and Rust provides several ways to ensure that you don't accidentally access or modify memory that you shouldn't.

## Slices

In Rust, a Slice is a view into a contiguous sequence of elements in a collection. Slices can be either mutable or immutable, and they're useful for passing around subsets of collections without having to create new collections.

``` rust
// Creating a slice from an array
let a = [1, 2, 3, 4, 5];
let slice1 = &a[1..3];  // slice1 is [2, 3]

// Creating a slice from a vector
let v = vec![1, 2, 3, 4, 5];
let slice2 = &v[1..3];  // slice2 is [2, 3]

// Modifying a slice
let mut s = String::from("hello");
let slice3 = &mut s[0..3];
slice3.make_ascii_uppercase();  // s is now "HELlo"
```

One of the reasons slices work differently in Rust is because Rust provides several ways to ensure that you don't accidentally access or modify memory that you shouldn't. For example, when you create a slice, Rust checks that the slice is within the bounds of the collection and that you're not creating a mutable slice when the original collection is immutable.

## String and slice methods

Rust provides several methods for working with Strings and slices. Here are some of the most useful ones:

``` rust
// String methods
let s = String::from("hello");
s.len();  // Returns the length of the string
s.is_empty();  // Returns true if the string is empty
s.contains("lo");  // Returns true if the string contains the substring "lo"
s.replace("lo", "p");  // Returns a new string with "lo" replaced by "p"
s.push_str(", world!");  // Appends the string ", world!" to the end of the string
s.pop();  // Removes the last character from the string
s.clear();  // Removes all characters from the string

// Slice methods
let s = String::from("hello");
let slice = &s[0..3];
slice.len();  // Returns the length of the slice
slice.is_empty();  // Returns true if the slice is empty
slice.contains("lo");  // Returns true if the slice contains the substring "lo"
slice.replace("lo", "p");  // Returns a new string with "lo" replaced by "p"
```