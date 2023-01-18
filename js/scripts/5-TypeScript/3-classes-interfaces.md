# Classes and interfaces

The classes feature has been available in JavaScript for a long time, but TypeScript adds some additional features to make it easier to work with classes. For example, TypeScript allows you to define access modifiers for class properties and methods, which can be either public, private, or protected. It also allows you to define abstract classes, which are classes that cannot be instantiated directly, but can only be inherited from.

It also add the concept of interfaces, which are used to define a contract for the properties and methods that a class must implement. Interfaces are similar to abstract classes, but they cannot contain any implementation details. They are also used to define the structure of objects, which can be useful when working with data from an API.

## Abstract class with private and public keywords

When a class is marked as abstract, it cannot be instantiated directly. Instead, it can only be inherited from. This is useful when you want to create a base class that contains some common functionality, but you don't want to be able to create an instance of that class. With an abstract class, you can create a derived class that inherits from the abstract class and then create an instance of the derived class.

```typescript
abstract class Vehicle {
    protected make: string;
    protected model: string;
    protected year: number;
    protected mileage: number;
    protected isRunning: boolean;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = 0;
        this.isRunning = false;
    }

    public start() {
        this.isRunning = true;
    }

    public stop() {
        this.isRunning = false;
    }

    public drive(distance: number) {
        if(this.isRunning) {
            this.mileage += distance;
            console.log(`The ${this.make} ${this.model} drove ${distance} miles.`);
        } else {
            console.log("The vehicle is not running.");
        }
    }

    public getInfo() {
        return `${this.year} ${this.make} ${this.model} with ${this.mileage} miles.`;
    }
}
```

This class has properties for the vehicle's make, model, year, and mileage. The "isRunning" property is used to track whether the vehicle is currently running or not. The class has methods for starting and stopping the vehicle, driving the vehicle (which increases the mileage), and getting information about the vehicle.

In TypeScript, you can directly use the keywords `private` and `public`. It will not enforce the privacy at runtime, but at compile time, which is enough for the security when used with a bundler.

Here is an example of a derived class from the Vehicle abstract class:

## Inheritance

```typescript
class Car extends Vehicle {
private numberOfDoors: number;

    constructor(make: string, model: string, year: number, numberOfDoors: number) {
        super(make, model, year);
        this.numberOfDoors = numberOfDoors;
    }

    public honk() {
        console.log("Honk honk!");
    }

    public getInfo() {
        return `${super.getInfo()} and has ${this.numberOfDoors} doors.`;
    }
}
```

The Car class inherits from the Vehicle class, so it has access to all the properties and methods of the Vehicle class. It also has its own property, "numberOfDoors", and it's own methods "honk" and "getInfo" (overrides the parent one) that are specific to cars. The "super" keyword is used to call the getInfo method of the parent class.

## Interfaces

An interface defines a contract for a class, specifying a set of properties and methods that the class must implement. Here's an example of an interface that the Vehicle class could implement:

```typescript
interface IVehicle {
make: string;
model: string;
year: number;
mileage: number;
isRunning: boolean;
start(): void;
stop(): void;
drive(distance: number): void;
getInfo(): string;
}
```

And here's how the Vehicle class could implement the interface:

```typescript
abstract class Vehicle implements IVehicle {
private make: string;
private model: string;
private year: number;
private mileage: number;
private isRunning: boolean;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = 0;
        this.isRunning = false;
    }

    public start() {
        this.isRunning = true;
    }

    public stop() {
        this.isRunning = false;
    }

    public drive(distance: number) {
        if(this.isRunning) {
            this.mileage += distance;
            console.log(`The ${this.make} ${this.model} drove ${distance} miles.`);
        } else {
            console.log("The vehicle is not running.");
        }
    }

    public getInfo() {
        return `${this.year} ${this.make} ${this.model} with ${this.mileage} miles.`;
    }
}
```

And for Car class, an interface that it could implement:

```typescript
interface ICar extends IVehicle {
numberOfDoors: number;
honk(): void;
}
```

And the implementation of the interface:

```typescript
class Car extends Vehicle implements ICar {
private numberOfDoors: number;

    constructor(make: string, model: string, year: number, numberOfDoors: number) {
        super(make, model, year);
        this.numberOfDoors = numberOfDoors;
    }

    public honk() {
        console.log("Honk honk!");
    }

    public getInfo() {
        return `${super.getInfo()} and has ${this.numberOfDoors} doors.`;
    }
}
```

By implementing the interfaces, the classes are now guaranteed to have the properties and methods specified in the interfaces. This allows for more robust type checking and code organization.

Interfaces can also be used to define a contract for a function. Here's an example of a function that takes an object that implements the IVehicle interface:

```typescript
function printVehicleInfo(vehicle: IVehicle) {
    console.log(vehicle.getInfo());
}
```

And here's how it could be used:

```typescript
let vehicle = new Vehicle("Toyota", "Corolla", 2015);
printVehicleInfo(vehicle);

let car = new Car("Toyota", "Camry", 2015, 4);
printVehicleInfo(car);
```