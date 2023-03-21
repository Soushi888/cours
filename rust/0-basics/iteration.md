# Rust lesson [...] - Iteration

In Rust, there is many way to loop the code or iterate over a collection.

## loop statement

The `loop` statement is used to create an infinite loop. The code inside the loop will be executed over and over again until the program is stopped.

``` rust
loop {
    println!("Hello world!");
}
```

This will print `Hello world!` forever. To stop the loop, you can use the `break` keyword.

``` rust
let mut x = 0;

loop {
    println!("x is equal to {}", x);

    x += 1;

    if x == 10 {
        break;
    }
}
```

This will print `x is equal to 0` to `x is equal to 9`.

## while statement

The `while` statement is used to create a loop that will be executed while a condition is true.

``` rust
let mut x = 0;

while x < 10 {
    println!("x is equal to {}", x);

    x += 1;
}
```

This will print `x is equal to 0` to `x is equal to 9`.

## for statement

The `for` statement is used to create a loop that will be executed a specific number of times.

``` rust
for x in 0..10 {
    println!("x is equal to {}", x);
}
```

This will print `x is equal to 0` to `x is equal to 9`.

## for statement with collections

The `for` statement can also be used to iterate over a collection.

``` rust
let numbers = [1, 2, 3, 4, 5];

for number in numbers.iter() {
    println!("number is equal to {}", number);
}
```

This will print `number is equal to 1` to `number is equal to 5`.

We used the `iter` method to get an iterator over the collection. This is because the `for` statement takes an iterator as parameter.

## for statement with destructuring

The `for` statement can also be used to iterate over a collection and destructure the values.

``` rust
let numbers = [(1, 2), (3, 4), (5, 6)];

for (x, y) in numbers.iter() {
    println!("x is equal to {} and y is equal to {}", x, y);
}
```

This will print `x is equal to 1 and y is equal to 2` to `x is equal to 5 and y is equal to 6`.

## for statement with destructuring and guards

The `for` statement can also be used to iterate over a collection and destructure the values and use guards.

``` rust
let numbers = [(1, 2), (3, 4), (5, 6)];

for (x, y) in numbers.iter() {
    if x == 3 {
        continue;
    }

    println!("x is equal to {} and y is equal to {}", x, y);
}
``` 

This will print `x is equal to 1 and y is equal to 2` to `x is equal to 5 and y is equal to 6`, but not `x is equal to 3 and y is equal to 4`.

The `continue` keyword is used to skip the current iteration.

## iterators and iterables

An iterator is an object that can be used to iterate over a collection. The `iter` method is used to get an iterator over a collection.

``` rust
let numbers = [1, 2, 3, 4, 5];

let mut iterator = numbers.iter();

assert_eq!(iterator.next(), Some(&1));
assert_eq!(iterator.next(), Some(&2));
assert_eq!(iterator.next(), Some(&3));
assert_eq!(iterator.next(), Some(&4));
assert_eq!(iterator.next(), Some(&5));
assert_eq!(iterator.next(), None);
```

The `next` method is used to get the next value of the iterator. It returns `None` when there is no more value.

### iter, iter_mut and into_iter

There are three methods to get an iterator over a collection: `iter`, `iter_mut` and `into_iter`.

- `iter` returns an iterator over a reference of the collection.
- `iter_mut` returns an iterator over a mutable reference of the collection.
- `into_iter` returns an iterator over the collection.

``` rust
let mut numbers = [1, 2, 3, 4, 5];

for number in numbers.iter() {
    println!("number is equal to {}", number);
}

for number in numbers.iter_mut() {
    *number += 1;
}

for number in numbers.into_iter() {
    println!("number is equal to {}", number);
}
```

### iter methods

There are many methods to manipulate an iterator.

- `map` is used to apply a function to each value of the iterator.
- `filter` is used to filter the values of the iterator.
- `find` is used to find the first value of the iterator that matches a predicate.
- `fold` is used to reduce the values of the iterator to a single value.
- `zip` is used to create an iterator over the values of two iterators.

``` rust
let numbers = [1, 2, 3, 4, 5];

let numbers = numbers.iter().map(|number| number + 1).collect::<Vec<_>>(); // [2, 3, 4, 5, 6]

let numbers = numbers.iter().filter(|number| number % 2 == 0).collect::<Vec<_>>(); // [2, 4, 6]

let number = numbers.iter().find(|number| number % 2 == 0); // Some(2)

let sum = numbers.iter().fold(0, |sum, number| sum + number); // 12

let numbers = [1, 2, 3, 4, 5];
let letters = ['a', 'b', 'c', 'd', 'e'];

let zipped = numbers.iter().zip(letters.iter()).collect::<Vec<_>>(); // [(1, 'a'), (2, 'b'), (3, 'c'), (4, 'd'), (5, 'e')]
```