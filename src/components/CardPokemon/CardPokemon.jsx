
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../slices/dataSlice";

function CardPokemon({onOpen,name, pokemonId,image,isFavorite, types, onSelected}) {
  const type = types.map(element => element.type.name).join(", ")
  const dispatch = useDispatch()

  const handleSelected = ()=>{
    onOpen(true)
    onSelected(pokemonId)
    
  }
  
  return (
    <div  className=" shadow-lg border-[1px] border-gray-200  rounded-xl  inline-block mx-10 my-5">
      <section>
        <div onClick={()=> dispatch(setFavorite({pokemonId:pokemonId}))} className=" cursor-pointer inline-block p-4">{!isFavorite? <CiStar className="w-6 h-6"/>:<FaStar className=" text-red-500 w-6 h-6"/> }</div>
        <h1 className="  titleCardMain text-center text-xl mb-2">{name}</h1>

      </section >
      <section onClick={handleSelected} className="cursor-pointer">
        <figure className="w-full h-full">
          <img
            
            className=" h-full w-full mx-auto object-cover border-t-2  border-gray-200 border-b-2 " src={`${image}`} alt="imagen" />
        </figure>
        <p className="typePokemon text-right px-4 my-2 text-lg text-slate-500 ">{type}</p>

      </section>
    </div>
  )
}

export default CardPokemon