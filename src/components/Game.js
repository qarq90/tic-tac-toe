import React, {useState} from "react";
import styled from "styled-components";
import "../index.css";

const Game = () => {
    const [dine, setDine] = useState(true);
    const [blocks, setBlocks] = useState(Array(9).fill(""));

    const blockClickHandler = (index) => {
        if (blocks[index] === "") {
            const newBlocks = [...blocks];
            newBlocks[index] = dine ? "X" : "O";
            setBlocks(newBlocks);

            if (newBlocks[0] === "X" && newBlocks[1] === "X" && newBlocks[2] === "X") {
                alert("X wins");
            } else if (newBlocks[0] === "O" && newBlocks[1] === "O" && newBlocks[2] === "O") {
                alert("O wins");
            } else if (newBlocks[3] === "X" && newBlocks[4] === "X" && newBlocks[5] === "X") {
                alert("X wins");
            } else if (newBlocks[3] === "O" && newBlocks[4] === "O" && newBlocks[5] === "O") {
                alert("O wins");
            } else if (newBlocks[6] === "X" && newBlocks[7] === "X" && newBlocks[8] === "X") {
                alert("X wins");
            } else if (newBlocks[6] === "O" && newBlocks[7] === "O" && newBlocks[8] === "O") {
                alert("O wins");
            } else if (newBlocks[0] === "X" && newBlocks[3] === "X" && newBlocks[6] === "X") {
                alert("X wins");
            } else if (newBlocks[0] === "O" && newBlocks[3] === "O" && newBlocks[6] === "O") {
                alert("O wins");
            } else if (newBlocks[1] === "X" && newBlocks[4] === "X" && newBlocks[7] === "X") {
                alert("X wins");
            } else if (newBlocks[1] === "O" && newBlocks[4] === "O" && newBlocks[7] === "O") {
                alert("O wins");
            } else if (newBlocks[5] === "X" && newBlocks[5] === "X" && newBlocks[8] === "X") {
                alert("X wins");
            } else if (newBlocks[5] === "O" && newBlocks[5] === "O" && newBlocks[8] === "O") {
                alert("O wins");
            } else if (newBlocks[0] === "X" && newBlocks[4] === "X" && newBlocks[8] === "X") {
                alert("X wins");
            } else if (newBlocks[0] === "O" && newBlocks[4] === "O" && newBlocks[8] === "O") {
                alert("O wins");
            } else if (newBlocks[2] === "X" && newBlocks[4] === "X" && newBlocks[6] === "X") {
                alert("X wins");
            } else if (newBlocks[2] === "O" && newBlocks[4] === "O" && newBlocks[6] === "O") {
                alert("O wins");
            }
            setDine(!dine);
        }
    };

    return (
        <>
            <StyledHeader className={dine ? "red" : "blue"}>
                <StyledHeading className={dine ? "blueH" : "redH"}>TIC-TAC-TOE</StyledHeading>
                <StyledBoard>
                    {blocks.map((content, index) => (
                        <StyledBlock className={dine ? "red" : "blue"} key={index}
                                     onClick={() => blockClickHandler(index)}>
                            {content}
                        </StyledBlock>
                    ))}
                </StyledBoard>
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

const StyledHeading = styled.h1`
  letter-spacing: 6px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #666666;
  border: 2px solid black;
  border-radius: 10px;
  width: 10rem;
  height: 10rem;
  transition: 0.5s all ease;

  &:hover {
    cursor: pointer;
    transform: scale(0.95);
  }
`;

export default Game;