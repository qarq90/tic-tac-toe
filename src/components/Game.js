import React, {useState} from "react";
import styled from "styled-components";
import "../index.css";

const Game = () => {
    const [dine, setDine] = useState(true);
    const [blocks, setBlocks] = useState(Array(9).fill(""));
    const [xWins , setXWins] = useState(0);
    const [oWins , setOWins] = useState(0);

    const blockClickHandler = (index) => {
        if (blocks[index] === "") {
            const newBlocks = [...blocks];
            newBlocks[index] = dine ? "X" : "O";
            setBlocks(newBlocks);

            if (newBlocks[0] === "X" && newBlocks[1] === "X" && newBlocks[2] === "X") {
                alert("X wins");
                setXWins(xWins+1);
            } else if (newBlocks[0] === "O" && newBlocks[1] === "O" && newBlocks[2] === "O") {
                alert("X wins");
                setOWins(oWins+1);
            } else if (newBlocks[3] === "X" && newBlocks[4] === "X" && newBlocks[5] === "X") {
                alert("X wins");
                setXWins(xWins+1);
            } else if (newBlocks[3] === "O" && newBlocks[4] === "O" && newBlocks[5] === "O") {
                alert("X wins");
                setOWins(oWins+1);
            } else if (newBlocks[6] === "X" && newBlocks[7] === "X" && newBlocks[8] === "X") {
                alert("X wins");
                setXWins(xWins+1);
            } else if (newBlocks[6] === "O" && newBlocks[7] === "O" && newBlocks[8] === "O") {
                alert("X wins");
                setOWins(oWins+1);
            } else if (newBlocks[0] === "X" && newBlocks[3] === "X" && newBlocks[6] === "X") {
                alert("X wins");
                setXWins(xWins+1);
            } else if (newBlocks[0] === "O" && newBlocks[3] === "O" && newBlocks[6] === "O") {
                alert("X wins");
                setOWins(oWins+1);
            } else if (newBlocks[1] === "X" && newBlocks[4] === "X" && newBlocks[7] === "X") {
                alert("X wins");
                setXWins(xWins+1);
            } else if (newBlocks[1] === "O" && newBlocks[4] === "O" && newBlocks[7] === "O") {
                alert("X wins");
                setOWins(oWins+1);
            } else if (newBlocks[5] === "X" && newBlocks[5] === "X" && newBlocks[8] === "X") {
                alert("X wins");
                setXWins(xWins+1);
            } else if (newBlocks[5] === "O" && newBlocks[5] === "O" && newBlocks[8] === "O") {
                alert("X wins");
                setOWins(oWins+1);
            } else if (newBlocks[0] === "X" && newBlocks[4] === "X" && newBlocks[8] === "X") {
                alert("X wins");
                setXWins(xWins+1);
            } else if (newBlocks[0] === "O" && newBlocks[4] === "O" && newBlocks[8] === "O") {
                alert("X wins");
                setOWins(oWins+1);
            } else if (newBlocks[2] === "X" && newBlocks[4] === "X" && newBlocks[6] === "X") {
                alert("X wins");
                setXWins(xWins+1);
            } else if (newBlocks[2] === "O" && newBlocks[4] === "O" && newBlocks[6] === "O") {
                alert("X wins");
                setOWins(oWins+1);
            }
            setDine(!dine);
        }
    };

    const restartHandler = () => {
        setBlocks(Array(9).fill(""));
        setDine(true);
    };

    return (
        <>
            <StyledHeader className={dine ? "red" : "blue"}>
                <StyledNav>
                    <StyledPlayer className={dine ? "blueH" : "redH"}>Player X wins: {xWins}</StyledPlayer>
                    <StyledHeading className={dine ? "blueH" : "redH"}>TIC-TAC-TOE</StyledHeading>
                    <StyledPlayer className={dine ? "blueH" : "redH"}>Player O wins: {oWins}</StyledPlayer>
                </StyledNav>
                <StyledBoard>
                    {blocks.map((content, index) => (
                        <StyledBlock className={dine ? "red" : "blue"} key={index}
                                     onClick={() => blockClickHandler(index)}>
                            {content}
                        </StyledBlock>
                    ))}
                </StyledBoard>
                <StyledClear className={dine ? "blueB" : "redB"} onClick={restartHandler}>Restart</StyledClear>
            </StyledHeader>
        </>
    );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeading = styled.h1`
  letter-spacing: 6px;
  padding: 0 7rem 3rem;  
  font-size: 5rem;
`;
const StyledPlayer = styled.div`
  padding-bottom: 3rem;
  font-size: 3rem;
`;

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: 7.5rem 7.5rem 7.5rem;
  grid-gap: 1rem;
`;

const StyledBlock = styled.div`
  font-size: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #666666;
  border: 2px solid black;
  border-radius: 10px;
  width: 7.5rem;
  height: 7.5rem;
  transition: 0.5s all ease;

  &:hover {
    cursor: pointer;
    transform: scale(0.95);
  }
`;

const StyledClear = styled.div`
  margin-top: 3rem;
  font-size: 2.5rem;
  letter-spacing: 5px;
  border: 2px solid black;
  border-radius: 10px;
  width: 12rem;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s all ease;

  &:hover {
    cursor: pointer;
    transform: scale(0.95);
  }
`;

export default Game;