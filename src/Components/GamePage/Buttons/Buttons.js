import * as sc from "../../StyledComponents/IndexStyledComponents";

const Buttons = (props) =>{
return(
    <div>
          <sc.Button disabled={true}>
            {!props.showPacman
              ? "PRESS 'ENTER' FOR RESET"
              : "PRESS 'ENTER' FOR PLACE"}{" "}
          </sc.Button>
          <sc.Button disabled={true}>
            PRESS 'R' for REPORT <br />
            (scroll to see it all)
          </sc.Button>
        </div>
)
}
export default Buttons;