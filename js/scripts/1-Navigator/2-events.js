"use strict";

const courseSectionElement = document.getElementById("1-2-events");
const buttonEl = courseSectionElement.querySelector("button"); // returns the first button element in the section


/* ------------------------------------------------------------------------------------------------- */


// Event listener
// An event listener is a function that is called when an event occurs
// The event listener is attached to an element
// The event listener is called when the event occurs on the element
buttonEl.addEventListener("click", () => { // the click event occurs when the button is clicked
	console.log("Button clicked!");
});

// Event handler
// An event handler is a function that is called when an event occurs
function buttonClickHandler() {
	console.log("Button clicked from handler !");
}

// Event listener
buttonEl.addEventListener("click", buttonClickHandler); // Add another event listener attached to the same button

const buttonEl2 = document.getElementById("button-2");

buttonEl2.onclick = () => console.log("onclick is overwrote"); // onclick is another way to add an event listener for click event, but it can only be used once for each element

const boxEl = document.querySelector(".box");
boxEl.addEventListener("click", (event) => {
	console.log("Box data :", event); // event is an object that contains information about the event
	console.log("Box target :", event.target); // event.target is the element that triggered the event
	console.log("Box target content :", event.target.textContent); // event.target.textContent is the text content of the element that triggered the event
});


/* ------------------------------------------------------------------------------------------------- */


const colorInputEl = document.querySelector("input[name='color']");
const colorOutputEl = document.querySelector("output#color-output");
let color;
colorInputEl.addEventListener("input", (event) => { // input event occurs when the value of an input element changes
	colorOutputEl.textContent = event.target.value; // event.target.value is the value of the input element
});

const changeColorButtonEl = document.querySelector("#change-color-btn");

function changeColorHandler() {
	boxEl.style.backgroundColor = colorInputEl.value;
	colorInputEl.value = "";
	colorOutputEl.textContent = "";
}

changeColorButtonEl.addEventListener("click", changeColorHandler);


/* ------------------------------------------------------------------------------------------------- */


function boxMouseOverHandler(event) {
	console.log("Box mouse over !");
}

// boxEl.addEventListener("mouseover", boxMouseOverHandler); // mouseover event occurs when the mouse pointer is over the element

function boxMouseOutHandler(event) {
	console.log("Box mouse out !");
	coordsOutputEl.textContent = "";
}

boxEl.addEventListener("mouseout", boxMouseOutHandler); // mouseout event occurs when the mouse pointer is out of the element

const coordsOutputEl = document.querySelector("#coords-output");
let mousePosition = {x: 0, y: 0};

function boxMouseMoveHandler(event) {
	mousePosition = {x: event.clientX, y: event.clientY}; // event.clientX and event.clientY are the coordinates of the mouse pointer relative to the browser window
	coordsOutputEl.textContent = `x: ${mousePosition.x}, y: ${mousePosition.y}`;
}

boxEl.addEventListener("mousemove", boxMouseMoveHandler); // mousemove event occurs when the mouse pointer is moved over the element

/* ------------------------------------------------------------------------------------------------- */

colorInputEl.addEventListener("keydown", (event) => { // keydown event occurs when a key is pressed down
	if (event.key === "Enter") { // event.key is the key that was pressed
		changeColorHandler();
	}
});

window.addEventListener("keydown", (event) => {
	if (event.ctrlKey && event.key === "s") { // Ctrl + S
		event.preventDefault(); // event.preventDefault() prevents the default action of the event
		alert("Ctrl + S pressed !");
	}
});

boxEl.addEventListener("contextmenu", (event) => { // contextmenu event occurs when the right mouse button is clicked
	event.preventDefault(); // event.preventDefault() prevents the default action of the event
	alert("Right mouse button clicked !");
});

/* ------------------------------------------------------------------------------------------------- */

const parentBoxEl = document.querySelector("#parent-box");
parentBoxEl.addEventListener("click", function (event) {
	console.log("Parent box target :", event.target); // event.target is the element that triggered the event
	console.log("Parent box current target :", event.currentTarget); // event.currentTarget is the element that the event listener is attached to
	console.log("this :", this); // this is the element that the event listener is attached to if the event listener is not an arrow function
});


/* ------------------------------------------------------------------------------------------------- */

// Assign elements to variables
const autoCompleteInputEl = document.querySelector("input[name='auto-complete']");
const autoCompleteOutputEl = document.querySelector("#auto-complete-output");
const autoCompleteListEl = document.querySelector("#auto-complete-list");

// Test data for auto complete
const searchTerms = ["apple", "banana", "orange", "pineapple", "strawberry", "watermelon", "grape", "kiwi", "mango", "pear", "peach", "plum", "cherry", "raspberry", "blueberry", "blackberry", "coconut", "lemon", "lime", "melon", "papaya", "passion fruit", "pomegranate", "tomato", "avocado", "apricot", "cantaloupe", "fig", "grapefruit", "jackfruit", "lychee", "mandarin", "nectarine", "persimmon", "quince", "star fruit", "tangerine", "yuzu", "durian", "guava", "honeydew", "mulberry", "olive", "pomelo", "rambutan", "soursop", "tamarind", "zucchini"];

autoCompleteInputEl.addEventListener("keyup", (event) => { // keyUp event occurs when a key is released
	const searchTerm = event.target.value; // event.target.value is the value of the input element
	let searchResults = searchTerms.filter((term) => term.startsWith(searchTerm)); // filter the search terms that start with the search term
	if (searchResults && searchResults !== searchTerm) autoCompleteOutputEl.style.display = "block"; // display the output element if there are search results
	else autoCompleteOutputEl.style.display = "none"; // hide the output element if there are no search results

	autoCompleteListEl.innerHTML = ""; // clear the list element
	searchResults.forEach((result) => autoCompleteListEl.innerHTML += `<li>${result}</li>`); // add the search results to the list element

	// Add event listeners to the list items
	autoCompleteListEl.querySelectorAll("li").forEach((li) => {
		li.addEventListener("click", (event) => {
			autoCompleteInputEl.value = event.target.textContent; // fill the input element with the text content of the clicked list item
			autoCompleteOutputEl.style.display = "none"; // hide the output element
		});
	});
});