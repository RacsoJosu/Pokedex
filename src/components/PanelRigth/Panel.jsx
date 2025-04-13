import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";
import { Dialog, DialogContent, DialogHeader, DialogImage, DialogText } from "../Dialog/Dialog";

function Panel({ onClose, isOpen, indexPokemon, pokemons }) {
  const pokemon = pokemons.find((element, index) => index == indexPokemon - 1);
  const type = pokemon.types.map((element) => element.type.name).join(", ");

  const handleDoubleClick = (e) => {
    if (e.target.id === "bg") {
      onClose(false);
    }
  };
  const abilities =pokemon.abilities.map(({ability}) =>ability.name).join(", ")

  return createPortal(
    <div className="flex h-full w-full absolute top-0 overflow-hidden ">
      <Dialog
        className={`panel ${
          isOpen ? "open" : ""
        } bg-white  shadow-2xl   inline-block h-full w-[400px]  max-w-full   overflow-y-auto `}
      >
        <DialogHeader>
          <div
            onClick={() => onClose(false)}
            className=" w-[100%] flex flex-row-reverse items-center px-4 h-8 "
          >
            <FaXmark className="cursor-pointer   h-6 w-6" />
          </div>

          <h1 className=" titleCardMain text-center text-4xl mb-2">
            {pokemon?.name}
          </h1>
        </DialogHeader>
        <DialogContent className="">
          <DialogImage src={pokemon?.sprites?.front_shiny} alt={pokemon.name} />

          <div className="flex flex-col gap-2 mt-2">
            <DialogText tag={"Type"} text={type} />

            <DialogText
              tag={"Ability"}
              text={abilities} 
            />

            <DialogText tag={"Weigth"} text={`${pokemon.weight}Kg`} />

            <DialogText tag={"Heigth"} text={`${pokemon.height}ft`} />

            <DialogText
              tag={"Nivel"}
              text={pokemon.base_experience}
              className={"text-green-600"}
            />
          </div>
        </DialogContent>
      </Dialog>
      <div
        id="bg"
        onDoubleClick={handleDoubleClick}
        className=" bg-black/25  h-full w-full  max-[500px]:hidden"
      ></div>
    </div>,
    document.getElementById("panel")
  );
}


export default Panel;
