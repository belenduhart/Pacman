import "./Grid.css";
import layout from "./Layout";
import * as vb from "../VariablesDeclaration";
import { useEffect } from "react";
import { useGridContext } from "./GridContext";

const Grid = (props) => {
  const {movementsArray,movesHandler} = useGridContext();

  useEffect(() => {
    let positionZero = document.getElementById("00");
    if (props.showPacman === true) {
      positionZero.classList.remove("dot-square");
      positionZero.classList.add(vb.pacmanClass, vb.RotateLeft);
      window.addEventListener("keyup", movesHandler);
    } else {
      let resetGrid = document.getElementsByClassName("grid");
      for (let i = 0; i < resetGrid.length; i++) {
        resetGrid[i].setAttribute("class", "grid dot-square");
      }
    }
    return()=>{window.removeEventListener("keyup", movesHandler);
  }
  }, [props.showPacman]);

  useEffect(() => {
    let reportPosition = document.getElementsByClassName(vb.pacmanClass)[0];
    let lastPosition;
    if (reportPosition == undefined) {
      lastPosition = "00";
    } else {
      lastPosition = reportPosition.id;
    }
    props.ReportHandler(movementsArray, lastPosition);
  }, [movementsArray]);

  let reminingDots =document.getElementsByClassName("dot-square").length; 
  useEffect(() => {
    if (document.getElementsByClassName("dot-square").length === 0) {
      alert("CONGRATULATIONS YOU WIN!");
      props.resetGame();
    }
  }, [reminingDots]);


  return (
    <>
      <div id="Game-grid">
        {layout.map((e) => (
          <div
            className="grid dot-square"
            key={e.x + "" + e.y}
            id={e.x + "" + e.y}
          ></div>
        ))}
      </div>
    </>
  );
};
export default Grid;
