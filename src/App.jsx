
import './App.css'
import Pokemons from './components/Pokemons/Pokemons'
import Searcher from './components/Searcher/Searcher'
import Title from './components/Title'
import WrapperSeach from './components/WrapperSearch/WrapperSeach'
import CardPokemon from './components/CardPokemon/CardPokemon'
import Panel from './components/PanelRigth/Panel'
import Header from './components/Header/Header'
import {  getPokemons } from './api'
import { getPokemonsWithDetails, setLoading } from './actions'
import { useEffect, useState } from 'react'
import {  useDispatch, useSelector,  } from 'react-redux'
function App() {
  const pokemons = useSelector(state => state.get("pokemons")).toJS()
  const loading = useSelector(state => state.get("loading"))
  const dispatch = useDispatch()
  
  const [selected,setSelected ] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  

  

  const searchData =  pokemons.filter((pokemon)=> pokemon.name.toLocaleLowerCase().includes(searchValue.toLowerCase()))
  
  useEffect(()=>{
    const fetchPokemons = async ()=> {
      dispatch(setLoading(true))
      
     
    
      const data = await getPokemons()
    
      dispatch(getPokemonsWithDetails(data)
      )
      dispatch(setLoading(false))
      
        
      
    }
    
    fetchPokemons()
  
    
  },[])
  

  return (
    <>

       {isOpen && <Panel pokemon={selected} isOpen={isOpen} onClose={setIsOpen}/>}
      <Header>
          <Title/>

          <WrapperSeach>
            <Searcher value={searchValue} onSearch={setSearchValue}/>
          </WrapperSeach>
      </Header>
      { loading ? <div className="mx-auto flex  flex-row gap-2 h-[500px] justify-center content-center items-center">
              <div className='mx-auto flex flex-row gap-2 h-[100px] '>
                <div className="w-8 h-8 rounded-full bg-blue-700 animate-bounce"></div>
                <div className="w-8 h-8 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-8 h-8 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>

              </div>
            </div>:
      <Pokemons>
        
        {searchData.map((pokemon)=><CardPokemon pokemonId={pokemon.id} isFavorite={pokemon.favorite} onSelected = {setSelected} name={pokemon?.name} image={pokemon?.sprites?.front_default} 
        types={pokemon?.types}  key={pokemon.name} onOpen={setIsOpen}/>
        )

        }
        
        
      </Pokemons>
      }
  
     
    </>
  )
}

export default App;
