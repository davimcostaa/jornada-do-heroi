import React, { useContext, useEffect, useState } from 'react'
import styles from './Menu.module.css'
import { HeroesContext } from '@/src/context/Heroes';
import { TextField } from '@mui/material';

const Menu = () => {
  const { heroes, setHeroes, originalHeroes } = useContext(HeroesContext);

  function pesquisarHeroi(event) {
    const termoPesquisa = event.target.value.toLowerCase(); 
    if (termoPesquisa === '') {
      setHeroes(originalHeroes)
    } else {
        const heroisFiltrados = heroes.filter((hero) => {
        return hero.name.toLowerCase().includes(termoPesquisa);
    })
    setHeroes(heroisFiltrados)
    }
    
  }

  return (
    <header className={styles.header}>
      <div>
        <span className={styles.titulo}>Jornada do Herói</span>
      </div>
      <div>
        <TextField
          sx={{
            "& .MuiInputLabel-root": { color: "white" },
            borderBottom: "1px solid #1BB96B",
            input: {
              color: 'white'
            }
          }}
          label="Pesquise"
          variant="standard"
          onChange={pesquisarHeroi}
        />
      </div>
    </header>
  )
}

export default Menu;
