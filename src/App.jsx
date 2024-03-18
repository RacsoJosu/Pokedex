
import './App.css'
import Pokemons from './components/Pokemons/Pokemons'
import Searcher from './components/Searcher/Searcher'
import Title from './components/Title'
import WrapperSeach from './components/WrapperSearch/WrapperSeach'
import CardPokemon from './components/CardPokemon/CardPokemon'
import { useState } from 'react'
import Panel from './components/PanelRigth/Panel'
import Header from './components/Header/Header'
const data = [
  {
  name:"Pikachu",
  icon:"icono",
  img:"",
  type:"Acuatico"
  },
  {
  name:"Bulbasur",
  icon:"icono",
  img:"",
  type:"planta"
  },
  {
  name:"Nombre",
  icon:"icono",
  img:"",
  type:"Fuego"
  }
  ,
  {
  name:"Nombre",
  icon:"icono",
  img:"",
  type:"Fuego"
  }
]
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchData = data.filter((pokemon)=> pokemon.name.toLocaleLowerCase().includes(searchValue.toLowerCase()) || pokemon.type.toLocaleLowerCase().includes(searchValue.toLowerCase()))

  const onSearch = ()=> {return }

  return (
    <>
       {isOpen && <Panel isOpen={isOpen} onClose={setIsOpen}/>}
      <Header>
          <Title/>

          <WrapperSeach>
            <Searcher value={searchValue} onSearch={setSearchValue}/>
          </WrapperSeach>
      </Header>
      
        <Pokemons>
          {searchData.map((pokemon, index)=><CardPokemon data={pokemon} key={index} onOpen={setIsOpen}/>
          )

          }
          
          
        </Pokemons>
  
     
    </>
  )
}

export default App
