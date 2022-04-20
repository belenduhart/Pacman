import "./App.css";
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerName from "./Components/PlayerName/PlayerName";
import GamePage from "./Components/GamePage/GamePage";
import { PlayerContextProvider } from "./Components/PlayerName/PlayerContext";
import React from "react";
import { GridContextProvider } from "./Components/GamePage/Grid/GridContext";

function App() {
  return (
    <>
      <PlayerContextProvider>
        <GridContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/Player" element={<PlayerName />} />
              <Route path="/Game" element={<GamePage />} />
            </Routes>
          </BrowserRouter>
        </GridContextProvider>
      </PlayerContextProvider>
    </>
  );
}

export default App;
