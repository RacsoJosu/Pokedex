import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../slices/dataSlice";
import { createContext } from "react";
import { useContext } from "react";

const CardContext = createContext({
  id: null,
  image: null,
  title: null,
  type: null,
  isFavorite: false,
  onClick: () => {},
  dispatch: () => {},
});

function CardPokemon({
  pokemonId,
  image,
  name,
  types,
  onSelected,
  onOpen,
  isFavorite,
  children,
}) {
  const type = types.map((element) => element.type.name).join(", ");
  const dispatch = useDispatch();

  const handleSelected = () => {
    onOpen(true);
    onSelected(pokemonId);
  };

  return (
    <CardContext.Provider value={{ id:pokemonId, image, title: name, type, isFavorite,dispatch, onClick : handleSelected  }}>
      <div className=" shadow-lg border-[1px] border-gray-200  rounded-xl  inline-block mx-10 my-5">
        {children}
      
      </div>

    </CardContext.Provider>
  );
}

export function CardHeader({ children }) {
  return <div className="flex flex-col">{children}</div>;
}

export function FavoriteButton() {
  const { isFavorite, onClick } = useContext(CardContext);
  return (
    <div onClick={onClick} className=" cursor-pointer inline-block p-4">
      {!isFavorite ? (
        <CiStar className="w-6 h-6" />
      ) : (
        <FaStar className=" text-red-500 w-6 h-6" />
      )}
    </div>
  );
}
export function TitleCard() {
  const { title } = useContext(CardContext);
  return <h1 className="  titleCardMain text-center text-xl mb-2">{title}</h1>;
}

export function CardBody({ children, className }) {
  const { onClick } = useContext(CardContext);
  return (
    <section onClick={onClick} className={` cursor-pointer ${className}`}>
      {children}
    </section>
  );
}

export function CardImage() {
  const { image, title } = useContext(CardContext);
  return (
    <figure className="w-full h-full">
      <img
        className=" h-full w-full mx-auto object-cover border-t-2  border-gray-200 border-b-2 "
        src={`${image}`}
        alt={title}
      />
    </figure>
  );
}

export function CardTag() { 
  const { type} = useContext(CardContext);
  return (
    <span className="typePokemon text-slate-500 ">
      {type}
    </span>
  );
}

export function CardFooter({ children, className }) { 
  return (
    <div className={className}>{children}</div>
  );
}
export default CardPokemon;
