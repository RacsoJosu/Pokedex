import axios from 'axios';

export const getPokemons =async ()=> {
    try {
        
        const resolve = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        const data = await resolve.data.results
        return data
    } catch (error) {
        console.log(error)
        
    }
}
export const getPokemonDetail = (pokemon)=>{
    return axios.get(pokemon.url)
        .then(res => res.data)
        .catch(err => console.log(err))
}

export const getPokemonAbilities=(pokemon)=>{
    return axios.get(pokemon.abilities[0].ability.url)
        .then(res=> res.data)
        .catch(error => console.log(error))
}