
import { SET_FAVORITES, SET_LOADING, SET_POKEMONS } from "../actions/types";
import { fromJS } from "immutable";
const initialState = fromJS({
    pokemons: [],
    loading: false,
  });
  
  export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return state.set('pokemons', fromJS(action.payload));
        case SET_FAVORITES:
            const pokemonIndex = state.get('pokemons').findIndex(pokemon => pokemon.get('id') === action.payload.pokemonId);
            if (pokemonIndex === -1) {
                return state;
            }
            const favorite = state.getIn(['pokemons', pokemonIndex, 'favorite']);
            return state.setIn(['pokemons', pokemonIndex, 'favorite'], !favorite);
        case SET_LOADING:
            return state.set('loading', action.payload);
        default:
            return state;
    }
};
// export const pokemonsReducer = (state=initialState,action  )=>{
//     switch (action.type) {
//         case SET_POKEMONS:
//             // return {...state, pokemons: action.payload}
//             return state.setIn(['pokemons'], fromJS(action.payload));
//         case SET_FAVORITES:
//             // const newPokemonsList = [...state.pokemons]
//             // const currentPokemonIndex = newPokemonsList.findIndex((pokemon)=> pokemon.id === action.payload.pokemonId)
            
//             const currentPokemonIndex = state.get('pokemons').findIndex((pokemon) => {
//                 return pokemon.get('id') === action.payload.pokemonId;
//               });

//             if (currentPokemonIndex <0) {
//                 return state
//             }
//             // newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite
//             const favorite = state.get("pokemons")[currentPokemonIndex].get("favorite")

//             return state.setIn(["pokemons", currentPokemonIndex, "favorite"],!favorite)


//         case SET_LOADING:

//             return {...state, loading:action.payload}    
//         default:
//             return state;
//     }
// }
