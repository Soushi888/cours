"use strict";

console.log("Hello World !");

const formEl = document.querySelector("form");
const dataEl = document.querySelector("#data");

formEl.addEventListener("submit", (e) => {
	e.preventDefault();
	const formData = new FormData(formEl);
	const data = Object.fromEntries(formData);
	dataEl.innerHTML = JSON.stringify(data);
});

// formEl.onsubmit = function (event) {
// 	event.preventDefault();
// 	let data = new FormData(formEl);
// 	data.forEach((value, key) => {
// 		console.log(key, value);
// 	});
// };

