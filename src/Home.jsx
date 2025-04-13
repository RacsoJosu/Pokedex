import React from 'react'
import { Fragment } from 'react'
import Pokemons from './components/Pokemons/Pokemons'
import CardPokemon from './components/CardPokemon/CardPokemon'  
import { useOutletContext } from 'react-router-dom'
import "./App.css";

function Home() {
    const { loading, searchData, setSelected, setIsOpen} = useOutletContext()
    return (
        <Fragment>
            {loading === true ? (
        <div className="mx-auto flex  flex-row gap-2 h-[500px] justify-center content-center items-center">
          <div className="mx-auto flex flex-row gap-2 h-[100px] ">
            <div className="w-8 h-8 rounded-full bg-blue-700 animate-bounce"></div>
            <div className="w-8 h-8 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-8 h-8 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
          </div>
        </div>
      ) : (
        <Pokemons>
          {searchData?.map((pokemon) => (
            <CardPokemon
              pokemonId={pokemon.id}
              isFavorite={pokemon.favorite}
              onSelected={setSelected}
              name={pokemon?.name}
              image={pokemon?.sprites?.front_default}
              types={pokemon?.types}
              key={pokemon.name}
              onOpen={setIsOpen}
            />
          ))}
        </Pokemons>
      )}
    </Fragment>
  )
}

export default Home