import {useState, createContext, useContext} from 'react';

export const PlayerContext = createContext([]);
export const usePlayerContext = () => useContext(PlayerContext)
export const PlayerContextProvider = ({defaultValue = "", children})=>{
    
    const [playerName, setPlayerName] = useState(defaultValue);
    const [playerNameSaved, setPlayerNameSaved] = useState(false);
  
    function SavePlayerName (e) {
      setPlayerName(e.target.value);
      if (playerName.length > 0) {
        setPlayerNameSaved(true);
      } else {
        setPlayerNameSaved(false);
      }
    };

    return(
        <>
        <PlayerContext.Provider value={{
        playerName,
        playerNameSaved,
        SavePlayerName
        }}>
                {children}
        </PlayerContext.Provider>
        </>
    )

}
