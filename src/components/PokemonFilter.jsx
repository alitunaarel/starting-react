import React, { useContext } from 'react';
import PokemonContext from '../PokemonContext';

const PokemonFilter = () => {
    const { filter, filterSet } = useContext(PokemonContext)
    return (
        <input
            value={filter}
            onChange={(evt) => filterSet(evt.target.value)}
        />
    );
}
export default PokemonFilter;