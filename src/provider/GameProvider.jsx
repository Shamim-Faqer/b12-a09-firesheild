import React, { useEffect, useState } from 'react'
import { createContext } from 'react'


export const GameContext = createContext();

function GameProvider({children}) {
    const [games, setGames] = useState([]);

useEffect(()=> {
    fetch("/games.json")
.then(res=>res.json())
.then(data => setGames(data))
.catch(error => console.log(error)
);

},[]);

  return (
   <GameContext.Provider value={{games}}>
    {children}
   </GameContext.Provider>
  )
}

export default GameProvider;