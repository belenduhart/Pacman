import { useState, createContext, useContext } from "react";
import * as vb from "../VariablesDeclaration";

export const GridContext = createContext([]);
export const useGridContext = () => useContext(GridContext);
export const GridContextProvider = ({ defaultValue = [], children }) => {
  const [movementsArray, setmovementsArray] = useState(defaultValue);
  let position;
  let rotation;
  function classHandler(position, direction, positionId) {
    document.getElementById(positionId).setAttribute("class", "grid");
    if (position === null) {
      position = document.getElementById("00");
    }
    position.setAttribute("class", "grid");
    position.classList.add(vb.pacmanClass, direction);
  }

  function rotatePacman(direction, positionId) {
    document.getElementById(positionId).setAttribute("class", "grid");
    document
      .getElementById(positionId)
      .classList.add(vb.pacmanClass, direction);
  }

  function movesHandler(Event) {
    let positionId = document.getElementsByClassName(vb.pacmanClass)[0].id;
    let ID = String(positionId).split("");
    let X = parseInt(ID[0]);
    let Y = parseInt(ID[1]);
    if (
      Event.keyCode === vb.UP ||
      Event.keyCode === vb.DOWN ||
      Event.keyCode === vb.LEFT ||
      Event.keyCode === vb.RIGHT
    ) {
      switch (Event.keyCode) {
        case vb.UP:
          rotatePacman(vb.RotateUp, positionId);
          rotation = "UP";
          setmovementsArray((movementsArray) => [...movementsArray, "UP"]);
          break;
        case vb.DOWN:
          rotatePacman(vb.RotateDown, positionId);
          rotation = "DOWN";
          setmovementsArray((movementsArray) => [...movementsArray, "DOWN"]);
          break;
        case vb.LEFT:
          rotatePacman(vb.RotateLeft, positionId);
          rotation = "LEFT";
          setmovementsArray((movementsArray) => [...movementsArray, "LEFT"]);
          break;
        case vb.RIGHT:
          rotatePacman(vb.RotateRight, positionId);
          rotation = "RIGHT";
          setmovementsArray((movementsArray) => [...movementsArray, "RIGHT"]);
          break;
        default:
          break;
      }
    } else if (Event.keyCode === vb.MOVE) {
      switch (rotation ? rotation : "LEFT") {
        case "UP":
          if (X < 4) {
            position = document.getElementById(X + 1 + "" + Y);
            classHandler(position, vb.RotateUp, positionId);
            setmovementsArray((movementsArray) => [...movementsArray, "MOVE"]);
          }
          break;
        case "DOWN":
          if (X > 0) {
            position = document.getElementById(X - 1 + "" + Y);
            classHandler(position, vb.RotateDown, positionId);
            setmovementsArray((movementsArray) => [...movementsArray, "MOVE"]);
          }
          break;
        case "LEFT":
          if (Y < 4) {
            position = document.getElementById(X + "" + (Y + 1));
            classHandler(position, vb.RotateLeft, positionId);
            setmovementsArray((movementsArray) => [...movementsArray, "MOVE"]);
          }
          break;
        case "RIGHT":
          if (Y > 0) {
            position = document.getElementById(X + "" + (Y - 1));
            classHandler(position, vb.RotateRight, positionId);
            setmovementsArray((movementsArray) => [...movementsArray, "MOVE"]);
          }
          break;
      }
    } else {
      return;
    }
  }

  return (
    <>
      <GridContext.Provider
        value={{
          movementsArray,
          classHandler,
          rotatePacman,
          movesHandler
        }}
      >
        {children}
      </GridContext.Provider>
    </>
  );
};
