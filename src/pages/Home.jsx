/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import BackToTop from '../components/BackToTop';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import PokeInfo from '../components/PokeInfo';

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const getAPI = async () => {
    const res = await axios(url);
    getPokemon(res.data.results);
    setLoading(false);
    setNextUrl(res.data.next);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios(item.url);
      setPokemon((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  useEffect(() => {
    getAPI();
  }, [url]);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 container mx-auto font-mono">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-24">
          <Card pokemonData={pokemon} loadingStatus={loading} infoPokemon={(poke) => setPokeDex(poke)} />
          <button
            onClick={() => {
              setUrl(nextUrl);
            }}
            className="join-item btn btn-outline bg-white"
          >
            Load More
          </button>
        </div>
        <div className="px-4 py-28 mx-auto">
          <PokeInfo data={pokeDex} />
        </div>
      </div>
      <BackToTop />
    </>
  );
};

export default Home;
