"use client"
import React, { createContext, useEffect, useState } from 'react';
import api from '../services/http';

const HeroesContext = createContext();

const HeroesProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [originalHeroes, setOriginalHeroes] = useState([]);

  useEffect(() => {

    api.get('/api/ps/metahumans')
        .then(response => {
          setHeroes(response.data)
          setOriginalHeroes(response.data)
        })
        .catch(error => {
            console.log("Erro na chamada dos produtos: ", error)
        })
}, [])

  return (
    <HeroesContext.Provider value={{heroes, setHeroes, originalHeroes}}>
        {children}
    </HeroesContext.Provider>
  );
};

export { HeroesContext, HeroesProvider };