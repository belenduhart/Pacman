import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 85vh;
  margin: 0 30px;
`;
const GridContainer = styled.div`
  width: 50%;
`;
const PacmanGhost = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 1vw;
`;

export { Container, GridContainer, PacmanGhost };
