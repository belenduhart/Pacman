import { keyframes } from "styled-components";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1vh 1vw;
`;

const flicker = keyframes`
0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
  text-shadow:
      -0.2rem -0.2rem 1rem #fff,
      0.2rem 0.2rem 1rem #fff,
      0 0 2rem var(--neon-text-color),
      0 0 4rem var(--neon-text-color),
      0 0 6rem var(--neon-text-color),
      0 0 8rem var(--neon-text-color),
      0 0 10rem var(--neon-text-color);
  box-shadow:
      0 0 .5rem #fff,
      inset 0 0 .5rem #fff,
      0 0 2rem var(--neon-border-color),
      inset 0 0 2rem var(--neon-border-color),
      0 0 4rem var(--neon-border-color),
      inset 0 0 4rem var(--neon-border-color);        
}
20%, 24%, 55% {        
  text-shadow: none;
  box-shadow: none;
}    
`;

const Title = styled.h1`
  font-size: 5em;
  font-weight: 200;
  font-style: italic;
  color: #fff;
  padding: 1em 1em 1em;
  border: 0.4rem solid #fff;
  border-radius: 2rem;
  text-transform: uppercase;
  animation: ${flicker} 1.5s infinite alternate;
  text-align: center;
  &::-moz-selection {
    background-color: var(--neon-border-color);
    color: var(--neon-text-color);
  }
  &::selection {
    background-color: var(--neon-border-color);
    color: var(--neon-text-color);
  }
  &::focus {
    outline: none;
  }
`;



export { Container, Title };
