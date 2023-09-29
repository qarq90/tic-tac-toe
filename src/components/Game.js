import React, {useState} from "react";
import styled from "styled-components";
import "../index.css";

const Game = () => {
    const [dine, setDine] = useState(false);
    const DineHandler = () => {
        if (dine) {
            setDine(!dine)
        } else {
            setDine(!dine)
        }
    }
    return (
        <>
            <StyledHeader className={dine ? "red" : "blue"}>
                <StyledHeading>TIC-TAC-TOE</StyledHeading>
                <StyledBoard>
                    <StyledBlock onClick={DineHandler}>X</StyledBlock>
                    <StyledBlock onClick={DineHandler}>X</StyledBlock>
                    <StyledBlock onClick={DineHandler}>X</StyledBlock>
                    <StyledBlock onClick={DineHandler}>X</StyledBlock>
                    <StyledBlock onClick={DineHandler}>X</StyledBlock>
                    <StyledBlock onClick={DineHandler}>X</StyledBlock>
                    <StyledBlock onClick={DineHandler}>X</StyledBlock>
                    <StyledBlock onClick={DineHandler}>X</StyledBlock>
                    <StyledBlock onClick={DineHandler}>X</StyledBlock>
                </StyledBoard>
            </StyledHeader>
        </>
    )
}

const StyledHeader = styled.h1`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.h1`
  padding-bottom: 3rem;
  font-size: 5rem;
`;
const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 20px;

`;

const StyledBlock = styled.div`
  font-size: 7.5rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222222;
  border: 2px solid black;
  border-radius: 10px;
  width: 10rem;
  height: 10rem;
  transition: 0.5s all ease;

  &:hover {
    scale: 0.95;
  }`;
export default Game;