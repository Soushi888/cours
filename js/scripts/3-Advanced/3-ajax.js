const pokeapi_url = 'https://pokeapi.co/api/v2/pokemon/ditto';

// Fetch the data from the API
// fetch(pokeapi_url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     });

// Fetch the data from the API with an async function
async function getPokemon() {
	const response = await fetch(pokeapi_url);
	return await response.json();
}

const pokemons = getPokemon().then(data => {
	console.log(data);
});
console.log(pokemons);

const pokeForm = document.forms['pokemon-form'];
const pokemonInput = pokeForm['pokemon'];
const result = document.querySelector('.result');

pokeForm.addEventListener('submit', async e => {
	e.preventDefault();
	const pokemon = pokemonInput.value.toLowerCase();
	const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

	try {
		const response = await fetch(url);
		const data = await response.json();

		result.innerHTML = generatePokemonHTML(data)
	} catch (error) {
		result.innerHTML = `<h2 class="card-header">No Pokemon Found</h2>`;
	}
});

function generatePokemonHTML(data) {
	const capitalizedName = data.name[0].toUpperCase() + data.name.slice(1);

	return `
    <div class="card">
        <h2 class="card-header">${capitalizedName}</h2>
        <img src="${data.sprites.versions['generation-iii'].emerald.front_default}" alt="${data.name} sprite">
    </div>
`;
}

// ------------------------------------------------------------

const localhost_api_url = 'http://localhost:4000/';

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

const getUsers = async () => {
	try {
		const response = await fetch(localhost_api_url + 'users');
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

const getUser = async (id) => {
	try {
		const response = await fetch(localhost_api_url + 'users/' + id);
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

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

createUserForm.addEventListener('submit', async evt => {
	evt.preventDefault();

	const user = {
		name: username.value,
		email: email.value,
		password: password.value
	};

	const response = await createUser(user);
	console.log(response);
	createUserForm.reset();
	showUsers();
});

const showUsers = () => {
	const usersList = document.querySelector('.users-list');

	getUsers().then(users => {
		usersList.innerHTML = users.map(user => {
			return `<li class="user-list-item">${user.id} : ${user.name}
			<ul>
				<li>email : ${user.email}</li>
				<li>password : ${user.password}</li>
			</ul></li>`;
		}).join('');

		const usersElements = document.querySelectorAll('.user-list-item');
		usersElements.forEach(userElement => {
			userElement.addEventListener('click', async evt => {
				const userId = evt.currentTarget.innerText.split(' : ')[0];
				const user = await getUser(userId);
				const deleteConfirmation = confirm(`Are you sure you want to delete ${user.name} ?`);
				if (deleteConfirmation) {
					const response = await deleteUser(userId);
					console.log(response);
					showUsers();
			}
			});
		});
	});
}
showUsers();