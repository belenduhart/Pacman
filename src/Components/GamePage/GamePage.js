import Grid from "./Grid/Grid";
import Report from "./Report/Report";
import * as gp from "../StyledComponents/SC_GridPage";
import { useState } from "react";
import Title from "./Title/Title";
import Buttons from "./Buttons/Buttons";


const GamePage = () => {
  const [showPacman, setShowPacman] = useState(true);
  const [MovementArray, setMovementArray] = useState([{}]);
  const [ShowReport, setShowReport] = useState(false);
  const [output, setOutput] = useState([]);

  window.addEventListener("keydown", PlaceAndReset);

  function PlaceAndReset(Event) {
    if (Event.keyCode === 13) {
      resetGame();
    } else if (Event.keyCode === 82) {
      setShowReport(!ShowReport);
    }
  }
  function resetGame() {
    setMovementArray([]);
    setOutput([]);
    setShowPacman(!showPacman);
    setShowReport(false);
  }

  function ReportHandler(movearray, lastPosition) {
    setMovementArray(movearray);
    setOutput(lastPosition);
    if (output > 0 && movearray.slice(-1) === "MOVE") {
      setOutput(output.slice(-1).split(""));
    }
  }

  return (
    <>
      <Title/>
      <gp.Container>
        <Buttons showPacman={showPacman}/>
        <gp.GridContainer>
          <Grid
            showPacman={!showPacman}
            ReportHandler={ReportHandler}
            resetGame={resetGame}
          />
        </gp.GridContainer>
        <Report output={output} MovementArray={MovementArray} ShowReport={ShowReport}></Report>
      </gp.Container>
    </>
  );
};

export default GamePage;
