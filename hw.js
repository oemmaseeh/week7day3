
console.log('Welcome to pokeworld!!');

const getPokemon = async (e) => {
  e.preventDefault();
  console.log('Form submitted!');
  let name = e.target.name.value;
  console.log(name);
  if (name === '') {
      name = 1;
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  const res = await fetch(url)
  const data = await res.json()

  const container = document.getElementById('container');
  container.innerHTML = `<h2>${data.name}</h2>`;
  container.innerHTML += `<img src="${data.sprites.front_default}" alt="${data.name}" />`;
};



const form = document.querySelector('form');
form.addEventListener('submit', getPokemon);

