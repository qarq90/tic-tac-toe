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

            if (blocks[0].value === "X" && blocks[1].value === "X" && blocks[2].value === "X") {
                alert("X wins");
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
    transform: scale(0.95);
  }
`;

export default Game;