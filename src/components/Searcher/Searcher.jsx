import { FaSearch } from "react-icons/fa";
function Searcher({ value, onSearch }) {
  const handleSearch = (e) => onSearch(e.target.value);

  return (
    <>
      <input
        onChange={handleSearch}
        value={value}
        type="text"
        placeholder="Buscar pokemon"
        className=" searchBox text-center bg-slate-100  rounded-l-md outline-none"
      />

      <button className=" cursor-pointer searchButton rounded-r-md bg-blue-500 w-14 ">
        <FaSearch className=" h-14 w-5 hover:w-7 mx-auto text-white" />
      </button>
    </>
  );
}

export default Searcher;
