const search = document.querySelector('#search');
const number = document.querySelector('#number');
const types = document.querySelector('#types');
const pokemonImage = document.querySelector('#pokemon-image')

const fetchApi =  async(pkmnName) => {
    //Para pokemons que tem mais que uma palavra em seu nome (Mr Mime)
    pkmnNameApi = pkmnName.split(' ').join('-');
    
    const response = await fetch ('https://pokeapi.co/api/v2/pokemon/' + pkmnNameApi);
    const pkmnData = await response.json();

    return pkmnData;
}

search.addEventListener('change', async (event) => {
    const pkmnData = await fetchApi(event.target.value);

    console.log(pkmnData);


    //Coloca o número/posição do pokemon no topo do card
    number.innerHTML =  '#' + pkmnData.id.toString().padStart(3, '0');


    //Coloca a imagem do pokemon
    pokemonImage.src = pkmnData.sprites.other.home.front_default;


})