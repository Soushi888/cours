# Generics

Generics are used to define a type that can be used in multiple places. This can be useful when you have a function that can work with multiple types, and you want to define a type that can be used in multiple places.

## Generic Arrays

Here's an example of a generic array:

```typescript
let myArray: Array<number> = [1, 2, 3];
let myArray2: Array<string> = ["Hello", "World"];
let myArray3: Array<boolean> = [true, false];
let myArray4: Array<string | number> = [1, 2, 3, "Hello"];
```

In those examples, the type of the array is defined using the `Array` type. The `Array` type takes a type parameter, which is the type of the elements in the array.

## Generic functions

A generic function is a function that can work with multiple types of data, rather than being tied to a specific type. Generic functions are defined using a type parameter, which is a placeholder for the actual type that will be used when the function is called.

Here is an example of a generic function in TypeScript:

```ts
function identity<T>(arg: T): T {
    return arg;
}
```

In this example, the function "identity" takes a single argument "arg" of type "T", and returns a value of the same type "T". The angle brackets <> indicate that the function is generic, and "T" is the type parameter.

You can use this function with any type by specifying the type parameter when calling the function:

```ts
let output1 = identity<string>("hello");
console.log(output1); // "hello"

let output2 = identity<number>(10);
console.log(output2); // 10
```

TypeScript also allows you to use type inference to infer the type parameter automatically based on the argument passed to the function. If you don't specify the type parameter, TypeScript will try to infer it from the argument:

```ts
let output3 = identity("hello");
console.log(output3); // Output: "hello"

let output4 = identity(10);
console.log(output4); // Output: 10
```

Using generic functions can make your code more reusable and flexible, since you don't have to write separate functions for every possible type. Instead, you can write a single function that works with any type, and let TypeScript handle the type checking for you.

It's worth noting that you can also use generic types in the types of functions, this means that the type parameter can be used in the function signature, and it can be used to specify the types of the function arguments and return values.

### Promises and generics

The Promise type in TypeScript is also generic, which means that you can specify the type of the value that will be returned by the promise. Here's an example:

```ts
let promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});
```

## Generic classes

You can also define a generic class. For example, the following class can be used to create a stack that can contain values of different types:

```ts
class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}
```

This example is a simple implementation of a Stack data structure in TypeScript using a generic type parameter `T`.

The class `Stack` has a private property called "items" which is an array of type `T`. This means that the type of the elements in the stack can be any type specified when the class is instantiated.

The class also has two methods, `push` and `pop`. The `push` method takes a parameter `item` of type `T` and adds it to the end of the `items` array. The `pop` method removes and returns the last item of the `items` array. If there is no items in the array, it will return undefined.

## Generic constraints

You can also define a generic type that can only be used with types that extend a specific type. For example, the following type can be used to define an array that can only contain objects that extend the `Person` type:

```ts
type Person = {
  name: string;
  age: number;
};

type Citizen = Person & {
  country: string;
};

type PersonArray<T extends Person> = T[];

let people: PersonArray<Person> = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];

let citizens: PersonArray<Citizen> = [
  { name: "John", age: 30, country: "USA" },
  { name: "Jane", age: 25, country: "USA" },
];
```

Here, we define two types "Person" and "Citizen" using an intersection type which means that the "Citizen" type has all the properties of the "Person" type, and also a property called "country".

Then, we define a generic type "PersonArray" which takes a type parameter "T" that extends the "Person" type. This means that the "T" can be either "Person" or any other type that extends "Person" such as "Citizen".

We then use this generic type to create two variables "people" and "citizens" which are arrays of "Person" and "Citizen" respectively. The generic constraint ensures that the elements of the arrays are only of the "Person" or "Citizen" type, and any other types will result in a compile-time error.

## Generic interfaces

You can also define a generic interface. For example, the following interface can be used to define an object that can contain properties of different types:

```ts
interface Person {
  name: string;
  age: number;
}

interface Citizen extends Person {
  country: string;
}

interface PersonObject<T extends Person> {
  [key: string]: T;
}

let people: PersonObject<Person> = {
  john: { name: "John", age: 30 },
  jane: { name: "Jane", age: 25 },
};

let citizens: PersonObject<Citizen> = {
  john: { name: "John", age: 30, country: "USA" },
  jane: { name: "Jane", age: 25, country: "USA" },
};
```

Here, we define two interfaces "Person" and "Citizen" which are extending the "Person" interface.

Then, we define a generic interface "PersonObject" which takes a type parameter "T" that extends the "Person" interface. This means that the "T" can be either "Person" or any other interface that extends "Person" such as "Citizen".

We then use this generic interface to create two variables "people" and "citizens" which are objects with properties that are of the "Person" and "Citizen" type respectively. The generic constraint ensures that the properties of the objects are only of the "Person" or "Citizen" type, and any other types will result in a compile-time error.

This example demonstrates how generic interfaces can be used to restrict the types of properties that can be used in an object and ensure type safety in your code.

It's worth noting that this example is using an object with dynamic keys, and the index signature [key:string]: T ensures that the keys of the object are strings and the values are of type T, T being the type parameter in the generic interface.