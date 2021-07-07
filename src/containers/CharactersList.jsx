//This page handles state management and rendering of Avatar Character List
import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/Airbender';
import Characters from '../components/Characters';


const CharacterList = () => {

  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters(page)
      .then(fetchedCharacters => setCharacters(fetchedCharacters));

  }, [page]);

  const changePage = by => setPage(prevPage => prevPage + by);
  return (
    <>
      <button onClick={() => changePage(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => changePage(1)} disabled={characters.length < 21}>&gt;</button>
      <Characters characters={characters} />
    </>
  );
};
export default CharacterList;
