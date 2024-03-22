import { combineReducers } from "redux"
import dataReducer from "../slices/dataSlice"
import uiReducer from "../slices/uiSlice"

const rootReducer =combineReducers({
    data:dataReducer,
    ui:uiReducer
  
})

export default rootReducer
// import { combineReducers } from "redux-immutable"
// import { pokemonsReducer } from "./pokemons"
// import { uiReducer } from "./ui"
// const rootReducer =combineReducers({
//     data:pokemonsReducer,
//     ui:uiReducer
// })

// export default rootReducer