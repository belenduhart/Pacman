import styled from "styled-components";

const Container = styled.div`
overflow: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;
    width: 20%;
    height: 60vh;
    &::-webkit-scrollbar{
        display: none;
    }
    &::-webkit-scrollbar {
        width: 0 !important;
     }
`;

export default Container;