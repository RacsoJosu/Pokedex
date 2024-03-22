
import './App.css'
import Pokemons from './components/Pokemons/Pokemons'
import Searcher from './components/Searcher/Searcher'
import Title from './components/Title'
import WrapperSeach from './components/WrapperSearch/WrapperSeach'
import CardPokemon from './components/CardPokemon/CardPokemon'
import Panel from './components/PanelRigth/Panel'
import Header from './components/Header/Header'

import { useEffect, useState } from 'react'
import {  shallowEqual, useDispatch, useSelector,  } from 'react-redux'
import { fetchPokemonsWithDetails } from './slices/dataSlice'
function App() {
  // const pokemons = useSelector(state => state.getIn(["data","pokemons"]), shallowEqual).toJS()
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual)
  const loading = useSelector(state => state.ui.loading)

  // const loading = useSelector(state => state.get("ui").get("loading"))
  const dispatch = useDispatch()
  
  const [selected,setSelected ] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchData =  pokemons.filter((pokemon)=> pokemon.name.toLocaleLowerCase().includes(searchValue.toLowerCase()))
  
  useEffect(()=>{
    dispatch(fetchPokemonsWithDetails())
   
  
    
  },[])
  

  return (
    <>

       {isOpen && <Panel indexPokemon={selected} pokemons={pokemons} isOpen={isOpen} onClose={setIsOpen}/>}
      <Header>
          <Title/>

          <WrapperSeach>
            <Searcher value={searchValue} onSearch={setSearchValue}/>
          </WrapperSeach>
      </Header>
      { loading ===true ? <div className="mx-auto flex  flex-row gap-2 h-[500px] justify-center content-center items-center">
              <div className='mx-auto flex flex-row gap-2 h-[100px] '>
                <div className="w-8 h-8 rounded-full bg-blue-700 animate-bounce"></div>
                <div className="w-8 h-8 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-8 h-8 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>

              </div>
            </div>:
      <Pokemons>
        
        {searchData?.map((pokemon)=><CardPokemon pokemonId={pokemon.id} isFavorite={pokemon.favorite} onSelected = {setSelected} name={pokemon?.name} image={pokemon?.sprites?.front_default} 
        types={pokemon?.types}  key={pokemon.name} onOpen={setIsOpen}/>
        )

        }
        
        
      </Pokemons>
      }
  
     
    </>
  )
}

export default App;
