// Simple object
// A property is a key/value pair
let obj = {
	key: "value",
};
console.log(obj);
console.log(obj.key); // dot notation

console.log(obj["key"]); // bracket notation
let prop = "key";
console.log(obj[prop]); // bracket notation with a variable

// person object
let person = {
	name: "Sacha",
	age: 29,
	profession: "Web Developer",
}
console.log(`${person.name} is ${person.age} years old and he is a ${person.profession}.`);

// Object with methods
// A method is a property that contains a function
let obj2 = {
	property: "obj2 property value",
	method: function () {
		console.log(this.property); // this is a reference to the object itself
	}
}
obj2.method();

let person2 = {
	name: "Sacha",
	age: 29,
	profession: "Web Developer",
	birthday: function () { // for use the "this" keyword, the function must be declared with the function keyword
		this.age++;
		console.log(`${this.name} is now ${this.age} years old.`);
	},
	changeProfession: (newProfession) => { // if the function is declared with the arrow function, the "this" keyword is not available.
		person2.profession = newProfession; // the "this" keyword is replaced by the parent object
		console.log(`${person2.name} is now a ${person2.profession}.`);
	}
}
console.log(person2);
person2.birthday();
person2.changeProfession("Web Designer");
console.log(person2);

// destructuring object
let {name, age, profession} = person;
console.log(`${name} is ${age} years old and he is a ${profession}.`);

// objects within objects
let address = {
	street: "123 Main Street",
	city: "New York",
	state: "NY",
	country: "USA",
	zip: "10001",
};
let person3 = {
	...person, // spread operator to copy the properties of an object to another object
	address // shorthand property (if the property name is the same as the variable name). equivalent to address: address
}
console.log(person3);
console.log(`${person3.name} lives at ${person3.address.street}, ${person3.address.city}, ${person3.address.state}, ${person3.address.country}, ${person3.address.zip}.`);

// array of objects
let people = [person, person2, person3];
console.log(people);

let people2 = [
	{
		name: "Sacha",
		age: 29,
		profession: "Web Developer",
	},
	{
		name: "John",
		age: 30,
		profession: "Web Designer",
	},
	{
		name: "Jane",
		age: 31,
		profession: "Digital Marketer",
	}
];
console.log(people2);

// iterate over an array of objects
for (let person of people2) {
	console.log(`${person.name} is ${person.age} years old and he is a ${person.profession}.`);
}