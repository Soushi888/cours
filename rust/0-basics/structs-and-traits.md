# Rust lesson [...] - Structs and Traits

In Rust, there is many way to create a custom type. The most common way is to use a `struct`.

## Structs

A `struct` is a custom type that can contain multiple fields. A field is a variable that is part of a `struct`.

``` rust
struct Person {
    name: String,
    age: u8,
}
```

To create a new instance of a `struct`, you can use the following syntax:

``` rust
let person = Person {
    name: String::from("John"),
    age: 30,
};
```

This will create a new instance of the `Person` `struct` with the name `John` and the age `30`.

To access the fields of a `struct`, you can use the dot notation:

``` rust
let name = person.name;
let age = person.age;
```

This will create a new variable `name` that contains the name of the `person` and a new variable `age` that contains the age of the `person`.

### Struct update syntax

The struct update syntax can be used to create a new instance of a `struct` from an existing instance of a `struct`.

``` rust
let person = Person {
    name: String::from("John"),
    age: 30,
};

let person2 = Person {
    name: String::from("Jane"),
    ..person
};
```

This will create a new instance of the `Person` `struct` with the name `Jane` and the age `30`.

### Tuple structs

A tuple `struct` is a `struct` that looks like a tuple. A tuple `struct` has a name and a list of fields.

``` rust
struct Color(i32, i32, i32);
```

To create a new instance of a tuple `struct`, you can use the following syntax:

``` rust
let color = Color(255, 0, 0);
```

To access the fields of a tuple `struct`, you can use the dot notation:

``` rust
let red = color.0;
let green = color.1;
let blue = color.2;
```

This will create a new variable `red` that contains the red value of the `color` and a new variable `green` that contains the green value of the `color`.

### Unit structs

A unit `struct` is a `struct` that looks like a unit. A unit `struct` has a name.

``` rust
struct Unit;
```

To create a new instance of a unit `struct`, you can use the following syntax:

``` rust
let unit = Unit;
```

### Implementing methods

Methods can be implemented on `structs`.

``` rust
struct Person {
    name: String,
    age: u8,
}

impl Person {
    fn new(name: String, age: u8) -> Person {
        Person {
            name,
            age,
        }
    }

    fn get_name(&self) -> &String {
        &self.name
    }

    fn get_age(&self) -> &u8 {
        &self.age
    }
}
```

This will create a new `struct` called `Person` with the fields `name` and `age`. The `Person` `struct` will have three methods: `new`, `get_name` and `get_age`.

The `new` method will create a new instance of the `Person` `struct` with the given name and age.
This is an idiomatic way to create a new instance of a `struct`. Other languages might call this a constructor.

The `get_name` method will return a reference to the name of the `Person` `struct`.

The `get_age` method will return a reference to the age of the `Person` `struct`.

To create a new instance of the `Person` `struct`, you can use the `new` method:

``` rust
let person = Person::new(String::from("John"), 30);
```

To access the fields of the `Person` `struct`, you can use the `get_name` and `get_age` methods:

``` rust
let name = person.get_name();
let age = person.get_age();
```

## Traits

A `trait` is a collection of methods that can be used by other types. It's a way to share common behavior between types.

``` rust
trait Area {
    fn area(&self) -> f64;
}
```

This will create a new `trait` called `Area` with the method `area`.

To implement a `trait` for a type, you can use the following syntax:

``` rust
struct Rectangle {
    width: f64,
    height: f64,
}

impl Area for Rectangle {
    fn area(&self) -> f64 {
        self.width * self.height
    }
}
```

This will implement the `Area` `trait` for the `Rectangle` `struct`.
In this example, the `area` method will return the area of the `Rectangle` `struct`. For another type, the `area` method could be calculated differently.

To use a `trait` for a type, you can use the following syntax:

``` rust
let rectangle = Rectangle {
    width: 10.0,
    height: 20.0,
};

let area = rectangle.area();
```

This will create a new instance of the `Rectangle` `struct` with the width `10.0` and the height `20.0`.
The `area` method will be called on the `rectangle` instance and the result will be stored in the `area` variable.

### Default implementations

Default implementations can be used to implement a `trait` for a type.

``` rust
trait Area {
    fn area(&self) -> f64;

    fn is_larger(&self, other: &Self) -> bool {
        self.area() > other.area()
    }
}
```

This will create a new `trait` called `Area` with the method `area` and the default method `is_larger`.

To implement a `trait` for a type, you can use the following syntax:

``` rust
struct Rectangle {
    width: f64,
    height: f64,
}

impl Area for Rectangle {
    fn area(&self) -> f64 {
        self.width * self.height
    }
}
```

This will implement the `Area` `trait` for the `Rectangle` `struct`.

To use a `trait` for a type, you can use the following syntax:

``` rust
let rectangle = Rectangle {
    width: 10.0,
    height: 20.0,
};

let rectangle2 = Rectangle {
    width: 20.0,
    height: 30.0,
};

let is_larger = rectangle.is_larger(&rectangle2);
```

This will create a new instance of the `Rectangle` `struct` with the width `10.0` and the height `20.0`.
The `is_larger` method will be called on the `rectangle` instance and the result will be stored in the `is_larger` variable.
There is no need to implement the `is_larger` method for the `Rectangle` `struct` because there is a default implementation.

### Trait bounds

Trait bounds can be used to restrict the types that can be used with a `trait`.

``` rust
trait Area {
    fn area(&self) -> f64;
}

fn print_area<T: Area>(shape: T) {
    println!("The area is {}", shape.area());
}
```