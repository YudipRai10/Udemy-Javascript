// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((res) => {
//     if (!res.ok) throw new Error("Could not fetch resource");
//     return res.json()
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

const form = document.querySelector("form");
const searchInput = document.getElementById("pokemonName");

async function fetchData(event) {
  event.preventDefault();

  try {
    const pokemonName = searchInput.value.toLowerCase();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!res.ok) throw new Error("Could not fetch resource");
    const data = await res.json();

    console.log(data);
    const div = document.getElementById("container");

    const name = data.name;
    const image = data.sprites.front_default;
    const types = data.types.map((t) => t.type.name).join(", ");
    const abilities = data.abilities.map((a) => a.ability.name).join(", ");

    div.innerHTML = `
      <img src="${image}"/>
      <p>${name}</p>
       <p><strong>Type:</strong> ${types}</p>
       <p><strong>Type:</strong> ${abilities}</p>
      
    `;
    searchInput.value = "";
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener("submit", fetchData);
