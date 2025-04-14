import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPokemonsWithDetails } from "../slices/dataSlice";
import { usePagination } from "./usePagination";
export function useData() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const searchData = pokemons.filter((pokemon) =>
    pokemon.name.toLocaleLowerCase().includes(searchValue.toLowerCase())
  );
  const { currentData, currentPage, totalPages, handlePageChange } =
    usePagination({ data: searchData, itemsPerPage: 9, searchValue });
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return {
    pokemons,
    loading,
    dispatch,
    selected,
    setSelected,
    isOpen,
    setIsOpen,
    searchValue,
    setSearchValue,
    currentData,
    currentPage,
    totalPages,
    handlePageChange,
  };
}
