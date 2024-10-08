# Rust lesson 4 - Vectors

## Vectors

A vector is a collection of values of the same type. Vectors have a variable length: they can grow or shrink in size.

### Declaring a vector

To declare a vector, we can use the `Vec::new` function or the `vec!` macro.

``` rust
let my_vector = Vec::new();
let my_vector: Vec<i32> = Vec::new([1, 2, 3]); // explicit type annotation
let my_vector = vec![1, 2, 3]; // vec! macro is equivalent to the `Vec::new` function
```

### Accessing a vector

To access a value in a vector, we can use the square brackets (`[]`) operator followed by the index of the value. The first value has index `0`.

``` rust
let my_vector = vec![1, 2, 3];
let first_value = my_vector[0]; // 1
let second_value = my_vector[1]; // 2
let third_value = my_vector[2]; // 3
```

You can also use the `get` method to access a value at a specific index as an `Option`.

``` rust
let my_vector = vec![1, 2, 3];
let first_value = my_vector.get(0); // Some(1)
let second_value = my_vector.get(1); // Some(2)
let third_value = my_vector.get(2); // Some(3)
let fourth_value = my_vector.get(3); // None
```

### Adding a value to a vector

To add a value to a vector, we can use the `push` method.

``` rust
let mut my_vector = vec![1, 2, 3];
my_vector.push(4); // my_vector is now [1, 2, 3, 4]
```

You can also use the `insert` method to add a value at a specific index.

``` rust
let mut my_vector = vec![1, 2, 3];
my_vector.insert(1, 4); // my_vector is now [1, 4, 2, 3]
```

### Removing a value from a vector

To remove a value from a vector, we can use the `pop` method.

``` rust
let mut my_vector = vec![1, 2, 3];
let last_value = my_vector.pop(); // my_vector is now [1, 2]
```

You can also use the `remove` method to remove a value at a specific index.

``` rust
let mut my_vector = vec![1, 2, 3];
let second_value = my_vector.remove(1); // my_vector is now [1, 3]
```

### Other methods

``` rust
let mut my_vector = vec![1, 2, 3];
my_vector.len() // return the length of the vector
my_vector.reverse() // reverse the order of the elements of the vector (mutate the variable)
my_vector.sort() // sort the elements of the vector (mutate the variable)
```

### Join a vector

If the vector is composed of strings or slices, it can be joined into a String with the `join` methode. It takes a separator as argument.

``` rust
let mut my_vector = vec!["hello", "world"];
let my_string = my_vector.join(", "); // "hello, world"
```
