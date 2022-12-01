// 1. Toggle the "dark-mode" class on the body with the click of the dark theme button
const darkModeBtn = document.getElementById('dark-mode-btn');
darkModeBtn.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
});

// Create the buttons inside the buttons container
const buttonsContainer = document.querySelector('.buttons');

// 2. Create another button that will totally reset the page
const resetBtn = document.createElement('button');
resetBtn.innerText = 'Reset';
resetBtn.addEventListener('click', () => {
	document.body.className = '';
	document.body.innerHTML = '';
});
buttonsContainer.appendChild(resetBtn);

// 3. Create a button that will add a new paragraph to the page
const addParagraphBtn = document.createElement('button');
addParagraphBtn.innerText = 'Add Paragraph';
addParagraphBtn.addEventListener('click', () => {
	const newParagraph = document.createElement('p');
	newParagraph.innerText = 'This is a new paragraph';
	document.body.appendChild(newParagraph);
});
buttonsContainer.appendChild(addParagraphBtn);

// 4. Create a button that will remove the last paragraph on the page
const removeLastParagraphBtn = document.createElement('button');
removeLastParagraphBtn.innerText = 'Remove Last Paragraph';
removeLastParagraphBtn.addEventListener('click', () => {
	const lastParagraph = document.querySelector('p:last-of-type');
	lastParagraph.remove();
});
buttonsContainer.appendChild(removeLastParagraphBtn);