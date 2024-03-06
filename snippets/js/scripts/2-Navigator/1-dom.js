console.log(document); // prints the whole document (the whole HTML page)
console.log(document.body); // prints the body of the document

/* ---------------------------------------------------------------------------------------------------------- */


console.groupCollapsed("Getting elements");

// Get element by ID
const titleEl = document.getElementById('title');
console.log(titleEl);

// Get element by class name
const paragraphEls = document.getElementsByClassName('paragraph');
console.log(paragraphEls);

// Get element by tag name
const linkEls = document.getElementsByTagName('a');
console.log(linkEls);

// Get element by query selector
const paragraphEl = document.querySelector('.paragraph');
console.log(paragraphEl);

// Get element by query selector all
const paragraphElements = document.querySelectorAll('.paragraph');
console.log(paragraphElements);

// Get element by query selector all
const linksInsideParagraphsEls = document.querySelectorAll('.paragraph > a');
console.log(linksInsideParagraphsEls);

console.groupEnd();


/* ---------------------------------------------------------------------------------------------------------- */


console.groupCollapsed("Creating elements");

// Create element
const newParagraphEl = document.createElement('p');
// Create text node
const newParagraphText = document.createTextNode('This is the first new paragraph');
newParagraphEl.appendChild(newParagraphText);// Append text node to element
console.log(newParagraphEl);
console.log(newParagraphEl.textContent);
console.log(newParagraphEl.innerText); // innerText is the same as textContent
console.log(newParagraphEl.innerHTML); // innerHTML is the content between the opening and closing tags of the element

// Create element with text via innerHTML
const newParagraphEl2 = document.createElement('p');
newParagraphEl2.innerHTML = 'This is the second new paragraph';
console.log(newParagraphEl2);

// Create text element with dynamic content
const newParagraphEl3 = document.createElement('p');
const name = 'John';
newParagraphEl3.innerHTML = `My name is ${name}`;
console.log(newParagraphEl3);

const array = ["apple", "banana", "orange"];
const newListEl = document.createElement('ul');
array.forEach((item) => { // Create list items
	const listItemEl = document.createElement('li'); // Create list item
	listItemEl.innerHTML = item; // Add content to list item
	newListEl.appendChild(listItemEl); // Append list item to list
});
console.log(newListEl);

const newListEl2 = document.createElement('ul');
newListEl2.innerHTML = array.map((item) => `<li>${item}</li>`).join(''); // Create list items and append them to list

const containerEl = document.getElementById('container');
containerEl.innerHTML = `
<h2>Container</h2>
<p>My name is ${name}</p>
${newListEl2.outerHTML}`; // outerHTML is the content of the element including the opening and closing tags

console.groupEnd();


/* ---------------------------------------------------------------------------------------------------------- */


// Add element to the DOM
const courseSectionEl = document.getElementById('1-1-dom');
courseSectionEl.appendChild(newParagraphEl); // Add element to the end of the body
courseSectionEl.append(newParagraphEl2, newListEl); // Add multiple elements to the end of the body

courseSectionEl.prepend(newListEl2); // prepend add multiple elements as the first childs of the parent element

courseSectionEl.before(newParagraphEl); // Add multiple elements before the parent element
courseSectionEl.after(newParagraphEl); // Add multiple elements after the parent element

// Replace element in the DOM
const newParagraphEl4 = document.createElement('p');
newParagraphEl4.innerHTML = 'This is the fourth new paragraph';

const newTitleEl = document.createElement('h1');
newTitleEl.innerHTML = 'This is the new Hello World !';
courseSectionEl.replaceChild(newTitleEl, titleEl); // Replace title with newTitle

// Remove child element from the DOM
courseSectionEl.removeChild(newParagraphEl2);

// Remove element from the DOM
// courseSectionEl.remove();

// Clone element
const clonedParagraphEl = newParagraphEl.cloneNode(true); // true means that the element will be cloned with all its children
courseSectionEl.appendChild(clonedParagraphEl);


/* ---------------------------------------------------------------------------------------------------------- */


console.groupCollapsed("Attributes");
// Get element attributes
const linkEl = document.querySelector('a');
console.log(linkEl.getAttribute('href')); // Get attribute value
console.log(linkEl.href); // href is a property of the element
console.log(linkEl.getAttributeNames()); // Get all attribute names
console.log(linkEl.attributes); // Get all attributes

// Set element attributes
linkEl.setAttribute('href', 'https://www.google.com'); // Set attribute value
linkEl.setAttribute('target', '_blank');
linkEl.href = 'https://www.github.com';

// Remove element attributes
linkEl.removeAttribute('target');

console.groupEnd();


/* ---------------------------------------------------------------------------------------------------------- */


console.groupCollapsed("Styles");
// Get element styles
console.log(courseSectionEl.style); // Get all inline styles
console.log(window.getComputedStyle(document.body)); // Get all computed styles
console.log(window.getComputedStyle(document.body).getPropertyValue('background-color')); // Get computed style value
console.log(window.getComputedStyle(document.body).display); // Get computed style value

// Change element styles
newListEl.style.color = 'red'; // Set inline style
courseSectionEl.style.backgroundColor = 'teal';
courseSectionEl.style.padding = '1rem';

console.log(courseSectionEl.style.backgroundColor);

console.groupEnd();


/* ---------------------------------------------------------------------------------------------------------- */


console.groupCollapsed("Classes");

console.log(newParagraphEl4.classList); // Get all classes
newParagraphEl4.classList.add('error'); // Add class
newParagraphEl4.classList.add('paragraph');
console.log(newParagraphEl4.classList);
console.log(newParagraphEl4.classList.value); // Get all classes as a string
console.log(newParagraphEl4.classList.contains('error')); // Check if element has a class

newParagraphEl4.classList.remove('paragraph'); // Remove class
console.log(newParagraphEl4.classList.value);

newParagraphEl4.classList.toggle('error'); // Toggle class (add if it doesn't exist, remove if it does)
console.log(newParagraphEl4.classList.value);
newParagraphEl4.classList.toggle('error');
console.log(newParagraphEl4.classList.value);

// Add class to all elements
const allLinksEls = document.querySelectorAll('a');
allLinksEls.forEach((linkEl, i) => {
	if (i % 2 === 0) { // Add class to even elements
		linkEl.classList.add('link');
	}
});

console.groupEnd();