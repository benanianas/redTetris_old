import { useState } from "react";
import { createBoard } from "../../utils/tetris.js";
import { T_HEIGHT, T_WIDTH } from "../../utils/tetris.js";

const useBoard = () => {
  const [board, setBoard] = useState(createBoard());

  const clearBoard = () => {
    for (let row = 0; row < T_HEIGHT; row++)
      for (let col = 0; col < T_WIDTH; col++)
        board[row][col] = { type: 0, merged: false };
  };
  const updateBoard = (tetro) => {
    if (!tetro) return;
    const newBoard = board.map((arr) => arr.slice());

    for (let row = 0; row < T_HEIGHT; row++)
      for (let col = 0; col < T_WIDTH; col++)
        !board[row][col].merged
          ? (newBoard[row][col] = { type: 0, merged: false })
          : null;

    tetro.shape.map((row, i) =>
      row.map((elm, j) => {
        if (elm !== 0 && i + tetro.x + i >= 0)
          newBoard[i + tetro.x][j + tetro.y] = {
            type: elm,
            merged: tetro.merged,
          };
      })
    );
    // if(tetro.merged)

    setBoard(newBoard);
  };
  return [board, updateBoard, clearBoard];
};

export default useBoard;
