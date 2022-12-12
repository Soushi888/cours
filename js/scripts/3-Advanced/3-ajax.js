const pokeapi_url = 'https://pokeapi.co/api/v2/pokemon/ditto';

// Fetch the data from the API
fetch(pokeapi_url)
	.then(response => response.json())
	.then(data => {
		console.log(data);
	});

// Fetch the data from the API with an async function
async function getPokemon() {
	const response = await fetch(pokeapi_url);
	return await response.json();
}

// Use the async function to get the data
const pokemons = getPokemon().then(data => {
	console.log(data);
});
console.log(pokemons); // If not consumed, the promise will still be pending

const pokeForm = document.forms['pokemon-form'];
const pokemonInput = pokeForm['pokemon'];
const result = document.querySelector('.result');

pokeForm.addEventListener('submit', async evt => {
	evt.preventDefault();
	const pokemon = pokemonInput.value.toLowerCase(); // Get the value from the input and make it lowercase
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`; // Create the URL with the value from the input

	// Use try/catch to handle errors
	try {
		const response = await fetch(url); // Fetch the data from the API
		const data = await response.json(); // Convert the response to JSON

		result.innerHTML = generatePokemonHTML(data)
	} catch (error) { // If there is an error, display it
		result.innerHTML = `<h2 class="card-header">No Pokemon Found</h2>`;
	}
});

/// generatePokemonHTML function return an HTML string with the data from the API
function generatePokemonHTML(data) {
	const capitalizedName = data.name[0].toUpperCase() + data.name.slice(1); // Capitalize the first letter of the name

	return `
    <div class="card">
        <h2 class="card-header">${capitalizedName}</h2>
        <img src="${data.sprites.versions['generation-iii'].emerald.front_default}" alt="${data.name} sprite">
    </div>
`;
}

// ------------------------------------------------------------

const localhost_api_url = 'http://localhost:4000/';

/// Get request to the API
const getHelloWorld = async () => {
	try {
		const response = await fetch(localhost_api_url);
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}
getHelloWorld().then(data => {
	console.log(data);
});

/// Get the users from the API
const getUsers = async () => {
	try {
		const response = await fetch(localhost_api_url + 'users');
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

/// Get a user from the API
const getUser = async (id) => {
	try {
		const response = await fetch(localhost_api_url + 'users/' + id);
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

/// Post request to create a user
const createUser = async (user) => {
	try {
		const response = await fetch(localhost_api_url + 'users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user)
		});
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

/// Put request to update a user
const updateUser = async (id, user) => {
	try {
		const response = await fetch(localhost_api_url + 'users/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user)
		});
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

/// Delete request to delete a user
const deleteUser = async (id) => {
	try {
		const response = await fetch(localhost_api_url + 'users/' + id, {
			method: 'DELETE',
		});
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

// ------------------------------------------------------------

const createUserForm = document.forms['create-user-form'];
const {username, email, password} = createUserForm;

createUserForm.addEventListener('submit', async evt => { // Submit event listener
	evt.preventDefault();

	// Create the user object from the form data
	const user = {
		name: username.value,
		email: email.value,
		password: password.value
	};

	const response = await createUser(user); // Create the user
	console.log(response);
	createUserForm.reset(); // Reset the form
	showUsers(); // Show the updated list of users
});

/// Show the users in the DOM
const showUsers = () => {
	const usersList = document.querySelector('.users-list');

	// Get the users from the API
	getUsers().then(users => {
		// Map over the users and return an HTML string
		usersList.innerHTML = users.map(user => {
			return `<li class="user-list-item">${user.id} : ${user.name}
			<ul>
				<li>email : ${user.email}</li>
				<li>password : ${user.password}</li>
			</ul></li>`;
		}).join('');

		const usersElements = document.querySelectorAll('.user-list-item');
		usersElements.forEach(userElement => {
			// Map over the users and add a click event listener
			userElement.addEventListener('click', async evt => {
				const userId = evt.currentTarget.innerText.split(' : ')[0];
				const user = await getUser(userId);
				const deleteConfirmation = confirm(`Are you sure you want to delete ${user.name} ?`); // Ask the user for deletion confirmation
				if (deleteConfirmation) { // If the user confirms the deletion
					const response = await deleteUser(userId); // Delete the user
					console.log(response);
					showUsers(); // Show the updated list of users
				}
			});
		});
	});
}
showUsers(); // Show the users on page load