"use strict";
const formEl = document.forms["contact-form"]; // form element
const {name, email, subject, message} = formEl; // destructuring

const submitBtn = document.querySelector("#submit"); // submit button
const resetBtn = document.querySelector("#reset"); // reset button

formEl.addEventListener("submit", (event) => {
	event.preventDefault(); // prevent default behaviour (refreshing the page)

	console.log(checkRequired([name, email, subject, message]));

	if (checkRequired([name, email, subject, message]) // check required fields
		&& checkLength(name, 3, 15) // check name length
		&& checkEmail(email) // check email
		&& checkLength(subject, 3, 30) // check subject length
	) {
		formEl.requestSubmit(); // submit form
	}
})

const errorsEl = document.querySelector("#errors"); // error message element


function checkRequired(inputArr) {}

function checkLength(input, min, max) {}

function checkEmail(input) {}

function showError(input, message, append = true) {}

function showSuccess(input) {}