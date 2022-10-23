"use strict";

console.log("Hello World !");

const formEl = document.querySelector("form");
const dataEl = document.querySelector("#data");

formEl.onsubmit = function (event) {
	event.preventDefault();
	let data = new FormData(formEl);
	data.forEach((value, key) => {
		console.log(key, value);
	});
};

