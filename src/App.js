import './App.css';
import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './services/pokemon';
import PokemonCard from './components/PokemonCard';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';


  useEffect(() => {
    async function fetchData () {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord
    }))

      setPokemonData(_pokemonData);
    
  }

  return (
    <div>
      {loading ? <h1>Loading...</h1> : (
        <>
        {console.log(pokemonData)}
        {pokemonData.map((item, index) => {
          return (
            <PokemonCard key={index} pokemon={item}/>
          )
        })}
        </>
      )}
      
    </div>
  );
}

export default App;
