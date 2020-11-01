import React from 'react';


import './App.css';

import PokemonInfo from './components/PokemonInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonContext from './PokemonContext';

function App() {
  const [filter, filterSet] = React.useState("");
  const [pokemon, pokemonSet] = React.useState(null);
  const [selectedPokemon, selectedPokemonSet] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => pokemonSet(data));
  }, [])

  if (!pokemon) {
    return <div>Loading data</div>
  }

  return (
    <PokemonContext.Provider
      value={{
        filter, pokemon, selectedPokemon, filterSet, pokemonSet, selectedPokemonSet
      }}
    >
      <div
        style={{
          margin: 'auto',
          width: 800,
          paddingTop: "1rem",

        }}
      >
        <h1 className='title'>Pokemon Search</h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColums: '70% 30%',
            gridColumnGap: '1rem'
          }}
        >
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </div>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
