# Decorators

Decorators are a feature of TypeScript that allow you to add additional functionality to a

- class
- method
- property
- or a parameter.

They are similar to annotations in Java and Rust, and decorators in other languages such as C#, python, and C++.
Decorators are a stage 2 proposal for JavaScript, and are not currently supported in JavaScript, but they are supported
in TypeScript.

Decorators are a powerful feature that can be used to add additional functionality to your code, but they can also be
used to add additional complexity, so they should be used with care.

## Class decorators

A class decorator is a function that modifies a class definition. It is applied to the constructor of a class and can be
used to add or override functionality. A class decorator is denoted with the @ symbol followed by the decorator
function. For example:

```typescript
@decorator
class MyClass {
    // class definition
}
```

The decorator function takes the original constructor as its only argument, and can return a new constructor that wraps
the original constructor with additional functionality.

Here's an example of a class decorator that adds a new property to a class:

```typescript
function addVersion(constructor: Function) {
    constructor.prototype.version = '1.0.0';
}

@addVersion
class MyClass {
    // class definition
}

console.log(new MyClass().version); // '1.0.0'
```

In this example, the addVersion function is a class decorator that adds a version property to the class it decorates.
When the MyClass is instantiated, it will have a version property with the value '1.0.0'.

## Method decorators

A method decorator is a function that modifies a method definition within a class. It is applied to a method and can be
used to add or override functionality. A method decorator is denoted with the @ symbol followed by the decorator
function. For example:

```typescript
class MyClass {
    @decorator
    myMethod() {
        // method definition
    }
}
```

The decorator function takes three arguments:

- the target object on which the method is defined
- the name of the method
- the property descriptor of the method

Here's an example of a method decorator that logs the input and output of a method:

```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log('Arguments:', args);
        const result = originalMethod.apply(this, args);
        console.log('Result:', result);
        return result;
    }
}

class MyClass {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}

const myclass = new MyClass()
console.log(myclass.add(1, 2))
// 'Arguments: [1, 2]'
// 'Result: 3'
```

In this example, a method decorator named log is defined. The decorator takes in three arguments:

- `target`, which is the object on which the method is defined. In this case, it is the `MyClass` object.
- `propertyKey`, which is the name of the method. In this case, it is the `add` method.
- `descriptor`, which is the property descriptor of the method. It contains information about the method, such as its
  value (the function that implements the method), its writability, its configurability, etc.

The decorator does the following:

- It stores the original method in a variable named `originalMethod` by accessing the `value` property of
  the `descriptor` object.
- It overrides the `value` property of the `descriptor` object with a new function that logs the input arguments and the
  output of the method.
    - this new function takes in a rest parameter `args` of type `any[]` which will contain all the arguments passed to
      the decorated method.
    - it logs the input arguments by calling `console.log('Arguments:', args);`
    - it calls the original method by calling `originalMethod.apply(this, args)`
    - it logs the returned value by calling `console.log('Result:', result);`
    - it returns the returned value from the original method.

After that, the class `MyClass` is defined. Inside the class, the method `add` is defined and decorated with the `@log`
decorator.

Then an instance of the class is created `const myclass = new MyClass()` and the method `add` is called with the
arguments `(1, 2)`.

As a result, the decorator logs the input arguments: 'Arguments: [1, 2]' and the returned value 'Result: 3' and returns
3 as the final output.

## Property decorators

A property decorator is a function that modifies a property definition within a class. It is applied to a property and
can be used to add or override functionality. A property decorator is denoted with the @ symbol followed by the
decorator function. For example:

```typescript
class MyClass {
    @decorator
    myProperty: string;
}
```

The decorator function takes two arguments:

- the target object on which the property is defined
- the name of the property

Here's an example of a property decorator that logs the value of a property when it is set:

```typescript
function log(target: any, propertyKey: string) {
    let _val = target[propertyKey];

    const getter = () => {
        return _val;
    };

    const setter = (newVal: any) => {
        console.log(`Setting ${propertyKey} to ${newVal}`);
        _val = newVal;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

class MyClass {
    @log
    myProp: string;
}

const myclass = new MyClass();
myclass.myProp = 'hello'; // 'Setting myProp to hello'
```

In this example, the log function is a property decorator that logs the new value of the decorated property 'myProp'
when it is set. It does this by:

- Defining a variable _val that initially holds the value of the property
- Defining two functions getter and setter
- `getter` function simply returns the stored value of the property
- `setter` function logs the new value when it is set and update the value stored in _val
- Using Object.defineProperty method to define the property with the getter and setter functions.
  When the MyClass is instantiated and the property myProp is set, it will log the new value of the property.

It is worth mentioning that property decorators are applied only when the property is defined, not when it is accessed.

## Parameter decorators

In TypeScript, a parameter decorator is a function that modifies a parameter of a method or a constructor. It is applied
to a parameter and can be used to add or override functionality. A parameter decorator is denoted with the `@` symbol
followed by the decorator function. For example:

```typescript
class MyClass {
    myMethod(@decorator param1: string) {
        // method definition
    }
}
```

The decorator function takes three arguments:

- the target object on which the method is defined
- the name of the method
- the index of the parameter in the parameter list

Here's an example of a parameter decorator that validates the length of a string parameter:

```typescript
function validateLength(target: any, propertyKey: string, parameterIndex: number) {
    const originalMethod = target[propertyKey];
    const descriptor = {
        value: function (...args: any[]) {
            if (args[parameterIndex].length < 3) {
                throw new Error(`${propertyKey} - invalid length`);
            }
            return originalMethod.apply(this, args);
        }
    };
    Object.defineProperty(target, propertyKey, descriptor);
}

class MyClass {
    @validateLength
    myMethod(param1: string) {
        // method definition
    }
}

const myclass = new MyClass();
myclass.myMethod('ab'); // throws error
```

In this example, the `validateLength` function is a parameter decorator that validates the length of the first parameter
of the decorated method 'myMethod'.
It does this by:

- storing the original method in the variable `originalMethod`
- Defining a descriptor object
- In the descriptor object, it defines a new function that validates the length of the first parameter of the method, if
  the parameter length is less than 3, it throws an error, otherwise it calls the original method
- Using `Object.defineProperty` method to define the property with the descriptor object.

When the `MyClass` is instantiated and the method `myMethod` is called, it will validate the first parameter. If the length
of the parameter is less than 3, it will throw an error.

It is worth mentioning that parameter decorators are applied before the method is called, it allows to add some
pre-processing or validation on the parameters before the method is executed.

## Metadata

Metadata is a way to add extra information to a class, method, property, or parameter. Metadata can be used to add

- annotations
- configuration
- documentation
- etc.

With the [`reflect-metadata` library](https://www.npmjs.com/package/reflect-metadata), you can define metadata using the `Reflect.metadata` decorator function. The `Reflect.metadata` function takes two arguments:

- the metadata key
- the metadata value

Here's an example of a class with metadata:

```typescript
@Reflect.metadata("key", "value")
class MyClass {}
```

You can also use Reflect.metadata to add metadata to a method like this:

```typescript
import "reflect-metadata";

class MyClass {
  @Reflect.metadata("key", "value")
  myMethod() {}
}

```

It's also worth mentioning that you can use `Reflect.getMetadata()` function to retrieve the value of the metadata.

```typescript
const value = Reflect.getMetadata("key", MyClass);
console.log(value);  // "value"
```

Keep in mind that reflect-metadata library need to be installed before being used.

## Decorator factories

A decorator factory is a function that returns a decorator. A decorator factory can be used to pass arguments to a decorator. For example:

```typescript
function log(message: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`${message + propertyKey}`);
    };
}

class MyClass {
    @log('hello')
    myMethod() {
        // method definition
    }
}

const myclass = new MyClass();
myclass.myMethod(); // 'hello myMethod'
```

In this example, the `log` function is a decorator factory that takes a string argument and returns a decorator function. 
The decorator function logs the message and the name of the decorated method.