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