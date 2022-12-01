"use strict";

// const formEl = document.getElementById("contact-form"); // form element
const formEl = document.forms["contact-form"]; // form element
const {name, email, subject, message} = formEl; // destructuring

const submitBtn = document.querySelector("#submit"); // submit button
const resetBtn = document.querySelector("#reset"); // reset button

// submit button event listener
submitBtn.addEventListener("click", (e) => {
	e.preventDefault(); // prevent default behaviour (refreshing the page)
	errorsEl.textContent = ""; // clear error message

	if (checkRequired([name, email, subject, message]) // check required fields
		&& checkLength(name, 3, 15) // check name length
		&& checkEmail(email) // check email
		&& checkLength(subject, 3, 30) // check subject length
	) {
		showResults();

		const additionalData = {
			navigator: navigator.userAgent,
			date: new Date().toLocaleString(),
			screen: {
				width: screen.width,
				height: screen.height,
			}
		};

		for (let key in additionalData) {
			const input = document.createElement("input");
			input.type = "hidden";
			input.name = key;
			input.value = additionalData[key];
			formEl.appendChild(input);
		}
		formEl.requestSubmit(); // submit form
	}
});


resetBtn.addEventListener("click", (e) => {
	// clear error message
	errorsEl.textContent = "";
	name.className = "";
	email.className = "";
	subject.className = "";
	message.className = "";
});


// ----------------------------------------------------------------------------------------------


const errorsEl = document.querySelector("#errors"); // error message element

// validation functions
function checkRequired(inputArr) {
	let errors = 0;
	inputArr.forEach((input) => {
		if (input.value.trim() === "") {
			console.log(input);
			showError(input, `All fields are required`, false);
			// showErrorInputOnly(input);
			return errors++;
		}
		showSuccess(input);
	});

	console.log(errors === 0);
	return errors === 0;
}

function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(input, `${input.name} must be at least ${min} characters`);
		// showErrorInputOnly(input);
		return false;
	} else if (input.value.length > max) {
		showError(input, `${input.name} must be less than ${max} characters`);
		// showErrorInputOnly(input);
		return false;
	}

	showSuccess(input);
	return true;
}

function checkEmail(input) {
	const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (regExp.test(input.value.trim())) {
		showSuccess(input);
		return true;
	}

	showError(input, "Email is not valid");
	// showErrorInputOnly(input);
	return false;
}


// ----------------------------------------------------------------------------------------------


// display functions
function showError(input, message, append = true) {
	append ? (errorsEl.innerHTML += `<p>${message}</p>`) : (errorsEl.innerHTML = `<p>${message}</p>`);
	input.classList.add("error");
	input.classList.remove("success");
}

function showErrorInputOnly(input) {
	input.classList.add("error");
	input.classList.remove("success");
}

function showSuccess(input) {
	input.classList.remove("error");
	input.classList.add("success");
}

function showResults() {
	const resultsEl = document.querySelector("#data");
	resultsEl.innerHTML = `
		<h2>Results</h2>
		<p>Name: ${name.value}</p>
		<p>Email: ${email.value}</p>
		<p>Subject: ${subject.value}</p>
		<p>Message: ${message.value}</p>
	`;
}


// ----------------------------------------------------------------------------------------------


// validate inputs on change
// name.addEventListener("input", (e) => checkLength(name, 2, 30));
// email.addEventListener("input", (e) => checkEmail(email));
// subject.addEventListener("input", (e) => checkLength(subject, 3, 100));
// message.addEventListener("input", (e) => checkLength(message, 5, 500));
