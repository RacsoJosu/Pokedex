import { getPokemonDetail } from "../api";
import { SET_FAVORITES, SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemons = (payload)=>({
    type:SET_POKEMONS,
    payload,

})

export const getPokemonsWithDetails = 
(pokemons=[] )=>
async (dispatch)=>{
    
    const pokemonDetails = await Promise.all(pokemons.map(pokemon=> getPokemonDetail(pokemon)))
    dispatch(setPokemons(pokemonDetails))

}
export const setLoading = (payload)=> ({
    type:SET_LOADING,
    payload
})
export const setFavorite = (payload)=>({
    type:SET_FAVORITES,
    payload
})