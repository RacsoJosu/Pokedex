import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { getPokemonDetail, getPokemons } from "../api"
import { setLoading } from "./uiSlice"


const initialState = {
    pokemons:[],
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch})=>{
      dispatch(setLoading(true))  
      const data = await getPokemons()
      const pokemonDetails = await Promise.all(data.map(pokemon=> getPokemonDetail(pokemon)))
      
      dispatch(setPokemons(pokemonDetails))
      dispatch(setLoading(false))  
      
      

    }
)

export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
        setPokemons: (state, action)=>{
            // "data/setPokemon"
            state.pokemons = action.payload
        },
        setFavorite: (state, action)=>{
         
            const pokemonIndex = state.pokemons.findIndex(pokemon => pokemon.id === action.payload.pokemonId);
            if (pokemonIndex >=0) {
             const favorite = state.pokemons[pokemonIndex].favorite
             state.pokemons[pokemonIndex].favorite = !favorite 
            }
            
        }
    }
})

export const{setFavorite, setPokemons}= dataSlice.actions
export default dataSlice.reducer