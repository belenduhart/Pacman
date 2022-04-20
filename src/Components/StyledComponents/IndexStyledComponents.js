import styled from "styled-components";

const PopUp = styled.div`
  border: 5px solid palevioletred;
  width: 350px;
  height: 300px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PopUpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #db709375;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const title = styled.p`
  color: white;
  font-size: ${(props) => props.size || "4em"};
  text-align: center;
  padding: 1vh;
`;
const Label = styled.label`
  display: block;
  width: 40%;
  padding: 5px;
  margin: auto;
  color: palevioletred;
  font-size: ${(props) => props.size || "3em"};
  width: 100%;
`;
const Input = styled.input`
  display: block;
  margin: auto;
  font-size: 18px;
  padding: 1vh 1vw;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-align: center;
  &:focus {
    border: 8px solid palevioletred;
  }
`;
const Button = styled.button`
  background: transparent;
  border-radius: 10px;
  border: 5px doted palevioletred;
  color: palevioletred;
  display: block;
  width: 200px;
  margin: 2vh auto;
  padding: 1vh 1vw;
  font-size: 20px;
  font-wight: bold;
  &:hover {
    background: white;
    opacity: 70%;
    cursor: pointer;
  }
  &:disabled{
    background: white;
    opacity: 70%;
    cursor:none;
  }
`;

export {PopUp, PopUpContainer, title, Label, Input, Button};