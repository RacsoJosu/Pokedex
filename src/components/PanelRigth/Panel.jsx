import { createPortal } from "react-dom"

function Panel({onClose, isOpen,pokemon}) {
    console.log(pokemon)
    const handleDoubleClick = (e)=>{
        if (e.target.id === "bg") {
            onClose(false)
            
        }

    }

  return createPortal(
    <div id="bg" onDoubleClick={handleDoubleClick} className="bgPanel  bg-opacity-15 h-full w-full bg-black">

        <div className={`panel ${isOpen ? "open":"" } bg-white  shadow-2xl   inline-block h-full`}>
        <section>
            <div onClick={()=>onClose(false)} className=" h-4 cursor-pointer text-right px-4">X</div>


            <h1 className=" titleCardMain text-center text-2xl mb-2">{pokemon?.name}</h1>

        </section>
        <figure className="w-[400px] h-[350px]">
            <img src="" alt="imagen" />
        </figure>
        <p className="description text-left px-4 my-2 text-xl ">Acuatico</p>
        </div> 
    </div>,document.getElementById("panel")

  )
}

export default Panel