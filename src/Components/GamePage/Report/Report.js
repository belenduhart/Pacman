import * as sc from "../../StyledComponents/IndexStyledComponents";
import Container from "../../StyledComponents/SC_Report";

const Report = (props) =>{
    
return(
    <Container className="Report-Page_Report-Container">
          {!(props.ShowReport)
            ? ""
            : props.MovementArray.map((e, index) => (
                <sc.Label key={index} size="14px">
                  {e}
                </sc.Label>
              ))}
          {!(props.ShowReport) ? (
            ""
          ) : (
            <sc.Label size="14px">
              Output {props.output[0] ? props.output[0] + "," : ""}
              {props.output[1] ? props.output[1] : ""}
              {props.output[0] >= 3 ? " NORTH-" : !props.output[0] ? " " : " SOUTH-"}
              {props.output[1] >= 3 ? "WEAST" : !props.output[1] ? " " : "EAST"}
            </sc.Label>
          )}
        </Container>
)
}

export default Report;