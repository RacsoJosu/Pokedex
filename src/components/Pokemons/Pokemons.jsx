/* eslint-disable react/prop-types */

function Pokemons({children}) {
  return (
    <main className=' block  relative mt-0 bg-[#F1F5F9] h-auto mx-auto '>
      <div className="cards   mx-auto bg-white mt-0  h-auto">
          {children}
      </div>

    </main>
  )
}

export default Pokemons