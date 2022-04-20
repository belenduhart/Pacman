import * as sc from "../../StyledComponents/IndexStyledComponents";
import * as gp from "../../StyledComponents/SC_GridPage";
import {usePlayerContext} from "../../PlayerName/PlayerContext";

const Title = () =>{
    const {playerName} = usePlayerContext();

    return(
        <sc.title>
        <gp.PacmanGhost
          src="https://c.tenor.com/dLT95wsUTQgAAAAi/ghost-boo.gif"
          alt="Pacman Ghost"
        />
        Welcome {playerName}!
      </sc.title>
    )
}

export default Title;