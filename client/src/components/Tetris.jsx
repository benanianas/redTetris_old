import React from "react";
import Board from "./Board.jsx";
import TetrisContainer from "./styles/TetrisContainer.jsx";
import useGame from "../hooks/useGame"

const Tetris = () => {
  const [board, rotate, move, down] = useGame();
  const gameControl = ({ keyCode }) => {
    if (keyCode === 13) console.log("start");
    if (keyCode === 37) move(0, -1);
    else if (keyCode === 39) move(0, 1);
    else if (keyCode === 40) move(1, 0);
    else if (keyCode === 38) rotate();
    else if (keyCode === 32) down();
  };
  return (
    <TetrisContainer tabIndex="0" onKeyDown={(e) => gameControl(e)}>
      <Board board={board} />
    </TetrisContainer>
  );
};

export default Tetris;
