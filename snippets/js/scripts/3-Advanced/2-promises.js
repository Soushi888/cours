// A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).
// A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
const promise1 = new Promise(resolve => {// do a thing, possibly async, then…
	setTimeout(() => {
		resolve("Stuff worked!");
	}, 1000);
});

promise1.then((result) => { // the then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.
	console.log(result); // "Stuff worked!"
});

const condition = true;

const promise2 = new Promise((resolve, reject) => {
	if (condition) {
		resolve("Stuff worked again !");
	} else {
		reject("Error, it broke");
	}
});

promise2.then((result) => {
	console.log(result);
}).catch((error) => { // the catch() method returns a Promise and deals with rejected cases only.
	console.error(error);
})

const promise3 = Promise.resolve(3); // Promise.resolve(value) returns a Promise object that is resolved with the given value.
promise3.then((result) => {
	console.log(result);
});

const promise4 = Promise.reject(3); // Promise.reject(reason) returns a Promise object that is rejected with the given reason.
promise4.catch((error) => {
	console.error(error);
});

// Promise.all(iterable) returns a single Promise that resolves when all the promises in the iterable argument have resolved or when the iterable argument contains no promises. It rejects with the reason of the first promise that rejects.
const promise5 = Promise.all([promise1, promise2, promise3, promise4]);
promise3.then((result) => {
	console.log(result);
}).catch((error) => {
	console.error(error);
}).finally(() => { // the finally() method returns a Promise. It takes a callback function as an argument, and is called after the promise is settled, whether fulfilled or rejected.
	console.log("This is the end of the promise chain");
});

// Async functions are a new way to write promises based code. They are a cleaner way to write promise based code, avoiding the need to explicitly create a Promise instance.
async function myFunction() {
	return "Hello";
}

myFunction().then((result) => {
	console.log(result);
});

// Await is only valid inside async functions. It makes JavaScript wait until that promise settles and returns its result.
async function myFunction2() {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("Hello"), 1000);
	});

	// const promise2 = async () => {
	// 	setTimeout(() => "Hello", 1000);
	// }

	const result = await promise; // wait until the promise resolves (*)

	console.log("Result from promise: " + result);

	// reject with error
	if (!condition) return Promise.reject("Error, it broke");

	return result
}

myFunction2().then((result) => {
	console.log("Result from then: " + result);
}).catch((error) => {
	console.error(error);
});


const data = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// const data = null;

const getData = async () => {
	const promise = new Promise((resolve, reject) => {
		if (!data) reject("Error, data not found");
		setTimeout(() => resolve(data), 1000);
	});

	// try...catch is used to handle errors in async functions
	try {
		return await promise
	} catch (e) {
		return Promise.reject(e);
	}
}

let savedResult;
getData().then((result) => {
	savedResult = result;
	console.log("Data: ", result);
}).catch((error) => {
	console.error(error);
});
console.log("Saved result: ", savedResult);
setTimeout(() => {
	console.log("Saved result after 2 seconds: ", savedResult);
}, 2000);


// Loading display
const courseSection = document.getElementById("3-2-promise");
const resultDiv = courseSection.querySelector(".result");

resultDiv.innerHTML = "Loading...";
getData().then((result) => {
	resultDiv.innerHTML = result;
}).catch((error) => {
	resultDiv.innerHTML = error;
});