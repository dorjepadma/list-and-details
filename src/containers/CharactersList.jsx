//This page handles state management and rendering of Avatar Character List
import React, { useState, useEffect } from 'react';
import { fetchCharacter } from '../services/Airbender';
import CharacterDetail from '../components/CharacterDetail';


const CharacterList = () => {

  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacter(page)
      .then(fetchedCharacters => setCharacters(fetchedCharacters));

  }, [page]);

  const changePage = by => setPage(prevPage => prevPage + by);
  return (
    <>
      <button onClick={() => changePage(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => changePage(1)} disabled={characters.length < 20}>&gt;</button>
      <CharacterDetail characters={characters} />
    </>
  );
};
export default CharacterList;
