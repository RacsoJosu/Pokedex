import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";

function Panel({ onClose, isOpen, indexPokemon, pokemons }) {
  const pokemon = pokemons.find((element, index) => index == indexPokemon - 1);
  const type = pokemon.types.map((element) => element.type.name).join(", ");

  const handleDoubleClick = (e) => {
    if (e.target.id === "bg") {
      onClose(false);
    }
  };

  return createPortal(
    <div
      id="bg"
      onDoubleClick={handleDoubleClick}
      className="bgPanel bg-black/25  h-full w-full "
    >
      <div
        className={`panel ${
          isOpen ? "open" : ""
        } bg-white  shadow-2xl   inline-block h-full w-auto  max-w-full   overflow-y-auto `}
      >
        <section>
          <div
            onClick={() => onClose(false)}
            className=" w-[100%] flex flex-row-reverse items-center px-4 h-8 "
          >
            <FaXmark className="cursor-pointer   h-6 w-6" />
          </div>

          <h1 className=" titleCardMain text-center text-4xl mb-2">
            {pokemon?.name}
          </h1>
        </section>
        <figure className="w-[400px] h-[350px]">
          <img
            src={`${pokemon?.sprites?.front_shiny}`}
            className="h-full w-full mx-auto object-contain border-t-2 border-b-2 border-gray-200"
            alt={`${pokemon.name}`}
          />
        </figure>
        <div>
          <p className="description text-left px-4 my-2 text-xl ">
            <span className=" font-bold">Type:</span> {type}
          </p>

          <p className="description text-left px-4 my-2 text-xl ">
            <span className=" font-bold">Ability:</span>{" "}
            {pokemon.abilities[0].ability.name}
          </p>
          <p className="description text-left px-4 my-2 text-xl ">
            <span className=" font-bold">Weigth:</span> {pokemon.weight}Kg
          </p>
          <p className="description text-left px-4 my-2 text-xl ">
            <span className=" font-bold">Heigth:</span> {pokemon.height}ft
          </p>
          <p className="description text-left px-4 my-2 text-xl text-green-600 ">
            <span className="font-bold text-xl text-[#000]  ">Nivel: </span>
            {pokemon.base_experience}
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("panel")
  );
}

export default Panel;
