import "./App.css";
import Searcher from "./components/Searcher/Searcher";
import Title from "./components/Title";
import WrapperSearch from "./components/WrapperSearch/WrapperSearch";
import Panel from "./components/PanelRigth/Panel";
import Header from "./components/Header/Header";

import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";
import { Outlet } from "react-router-dom";
function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchData = pokemons.filter((pokemon) =>
    pokemon.name.toLocaleLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div
    className="flex flex-col max-h-screen"
    >
      {isOpen && (
        <Panel
          indexPokemon={selected}
          pokemons={pokemons}
          isOpen={isOpen}
          onClose={setIsOpen}
        />
      )}
      <Header>
        <Title title={"Pokedex"} />
        <WrapperSearch>
          <Searcher value={searchValue} onSearch={setSearchValue} />
        </WrapperSearch>
      </Header>
      <div className="flex-1 overflow-y-auto py-8">
        <Outlet context={{ loading, searchData, setSelected, setIsOpen}} />

      </div>
    </div>
  );
}

export default App;
