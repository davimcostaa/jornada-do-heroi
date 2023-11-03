"use client"
import React, { createContext, useState } from 'react';

const BattleContext = createContext();

const BattleProvider = ({ children }) => {
  const [cardData, setCardData] = useState([]);

  

  return (
    <BattleContext.Provider value={{cardData, setCardData}}>
        {children}
    </BattleContext.Provider>
  );
};

export { BattleContext, BattleProvider };