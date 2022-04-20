import * as sc from "../StyledComponents/IndexStyledComponents";
import { Link } from "react-router-dom";
import { usePlayerContext } from "./PlayerContext";

const PlayerName = () => {
  const{playerNameSaved, SavePlayerName}= usePlayerContext() 


  return (
    <sc.PopUpContainer>
      <sc.PopUp>
        <sc.Label style={{ textAlign: "center" }} htmlFor="Player-Name">
          Player Name
        </sc.Label>
        <sc.Input id="PlayerName" onChange={SavePlayerName} />
        <Link to="/Game">
          <sc.Button disabled={!playerNameSaved} id="startGame" >START</sc.Button>
        </Link>
      </sc.PopUp>
    </sc.PopUpContainer>
  );
};

export default PlayerName;
