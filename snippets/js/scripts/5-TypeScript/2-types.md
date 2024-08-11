# Types

In TypeScript, you can define the type of a variable using a colon. For example:

```typescript
let myName: string = "John";
```

Here are some types of variable that can be defined in TypeScript:
- `number`: A number, such as 1, 5, or 100.
- `string`: A string of text, such as "Hello".
- `boolean`: A boolean value, either true or false.
- `array`: An array of values, such as [1, 2, 3].
- `object`: An object, such as {name: "John"}.
- `function`: A function.

- `any`: Any type of value.
- `unknown`: The type-safe counterpart of any.
- `void`: No type at all.
- `null`: The absence of any value.
- `undefined`: A variable that has not been assigned a value.
- `never`: The type of values that never occur.

- `enum`: A set of named constants.
- `tuple`: An array with a fixed number of elements whose types are known, but need not be the same.

- `bigint`: An integer with arbitrary precision.
- `symbol`: A unique and immutable data type and may be used as the key of an Object property.

## Union Types

Union types allow you to define a variable that can be one of several types. For example:

```typescript
let myNameOrMyAge: string | number = "John";
```

In this example, the variable `myNameOrMyAge` can be either a string or a number.

## Arrays

Arrays can be defined in TypeScript using the following syntax:

```typescript
let myArray: number[] = [1, 2, 3];
```

You can also define an array that can contain values of different types:

```typescript
let myArray: (number | string)[] = [1, 2, 3, "Hello"];
```

## Type Aliases

Type aliases are used to give a name to a type. For example:

```typescript
type StringOrNumber = string | number;
```

In this example, the type `StringOrNumber` is a union type that can be either a string or a number.

You can alson create a type alias for an object:

```typescript
type Person = {
  name: string;
  age: number;
};
```

In this example, the type `Person` is an object with two properties: `name` and `age`.

you can create a type alias for a function:

```typescript
type Add = (a: number, b: number) => number;
```

In this example, the type `Add` is a function that takes two numbers as parameters and returns a number.

You can use a custom type inside another type:

```typescript
type Person = {
  name: string;
  age: number;
};

type PersonArray = Person[];
```

## Index signatures
An index signature is a way to define an object type that allows you to access its properties using a string or a number, instead of using the dot notation or the square bracket notation.

The syntax for an index signature is [key: type]: valueType;, where "key" is the name of the index, "type" is the type of the index (string or number), and "valueType" is the type of the value that can be accessed using that index.

```typescript
interface Person {
  [key: string]: string;
}
```
In this example, the index signature is [key: string]: string; which means that the object can have any number of properties, as long as the property names are strings and the values are also strings.

This allows you to define an object type where the properties are dynamic and can be accessed using a string key. It's a way to define a loose typing for the object properties, and it's commonly used when working with JSON data or any kind of dynamic data coming from external sources.

## Type Combination

TypeScript supports type combination, which means that you can create a new type that is based on an existing type. For example:

```typescript
type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  employeeId: number;
};
```

In this example, the type `Employee` is based on the type `Person`. The type `Employee` has all the properties of the type `Person`, plus an additional property called `employeeId`.

## Type Guards

Type guards are used to narrow down the type of variable. For example:

```typescript
let myNameOrMyAge: string | number = "John";

if (typeof myNameOrMyAge === "string") {
  console.log(myNameOrMyAge.toUpperCase());
} else {
  console.log(myNameOrMyAge.toFixed());
}
```

## Type Inference

Type inference is a way for TypeScript to automatically determine the type of variable. For example:

```typescript 
let myName = "John";
```

In this example, TypeScript will automatically determine that the type of `myName` is a string.

## Type Assertions

Type assertions are used to tell the compiler that you know better than it does what the type of variable is. For example:

```typescript
let myName: any = "John";
let myNameLength: number = (myName as string).length;
```

In this example, the variable `myName` is of type `any`, so the compiler does not know what type it is. However, we know that it is a string, so we can use a type assertion to tell the compiler that it is a string.