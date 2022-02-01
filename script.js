async function mockApi() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
  const details = await data.json();
  for (let i = 0; i < 50; i++) {
    let j = details.results[i].name;
    createProfile(j);
  }
}



const whole_container = document.createElement('div');
whole_container.className = 'whole_container container';

async function createProfile(details) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${details}`);
  const pok_details = await data.json();

  const info = document.createElement('div');
  info.className = 'container_pok container';

  info.innerHTML = ` 
    <div class="pic">
        <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pok_details.id}.png">
    </div>
    <div class="text-capitalize text">
        <p class="name"><strong>Name&nbsp;&nbsp;&nbsp;: </strong><span class="name_main">${pok_details.name}</span></p>
        <p><strong>Weight&nbsp;: </strong>${pok_details.weight}</p>
        <p><strong>Ability&nbsp;: </strong>${pok_details.abilities[0].ability.name}</p>
        <p><strong>Moves&nbsp;&nbsp;: </strong>${pok_details.moves[0].move.name}</p>
    </div>
    `;
  console.log(pok_details.id);
  whole_container.append(info);
}
document.body.append(whole_container);



mockApi();
