
function CardPokemon({onOpen, data}) {
  
  return (
    <div onClick={()=>onOpen(true)} className=" shadow-xl border-[2px] cursor-pointer  rounded-xl  inline-block mx-10 my-5">
      <section>
        <div className="text-left px-4">{data.icon}</div>
        <h1 className=" titleCardMain text-center text-xl mb-2">{data.name}</h1>

      </section>
      <figure className="w-full h-[250px]">
        <img src="" alt="imagen" />
      </figure>
      <p className="typePokemon text-right px-4 my-2 text-lg ">{data.type}</p>
    </div>
  )
}

export default CardPokemon