import React from "react";
import { Fragment } from "react";
import Pokemons from "./components/Pokemons/Pokemons";
import CardPokemon, {
  CardBody,
  CardFooter,
  CardHeader,
  CardImage,
  CardTag,
  FavoriteButton,
  TitleCard,
} from "./components/CardPokemon/CardPokemon";
import { useOutletContext } from "react-router-dom";
import "./App.css";

function ListItems() {
  const {
    loading,
    currentData,
    setSelected,
    setIsOpen,
    currentPage,
    totalPages,
    handlePageChange,
  } = useOutletContext();
  return (
    <Fragment>
      <div className="w-full flex justify-center items-center px-8 gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 cursor-pointer hover:bg-blue-800 transition ease-in-out duration-500 rounded"
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span
        className="bg-blue-500 text-white px-4 py-2  hover:bg-blue-800 transition ease-in-out duration-500 rounded"
        >
          Página {currentPage} de {totalPages}
        </span>
        <button
          className="bg-blue-500 text-white px-4 py-2 cursor-pointer hover:bg-blue-800 transition ease-in-out duration-500 rounded"
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
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
          {currentData?.map((pokemon) => (
            <CardPokemon
              pokemonId={pokemon.id}
              isFavorite={pokemon.favorite}
              onSelected={setSelected}
              name={pokemon?.name}
              image={pokemon?.sprites?.front_default}
              types={pokemon?.types}
              key={pokemon.name}
              onOpen={setIsOpen}
            >
              <CardHeader>
                <FavoriteButton />
                <TitleCard />
              </CardHeader>
              <CardBody>
                <CardImage />
              </CardBody>
              <CardFooter className={"flex flex-row-reverse p-2"}>
                <CardTag />
              </CardFooter>
            </CardPokemon>
          ))}
        </Pokemons>
      )}
    </Fragment>
  );
}

export default ListItems;
