import { useState } from "react";
import { createBoard } from "../../utils/tetris.js";
import { T_HEIGHT, T_WIDTH } from "../../utils/tetris.js";

const useBoard = () => {
  const [board, setBoard] = useState(createBoard());

  const updateBoard = (tetromino) => {
    const newBoard = board.map((arr) => arr.slice());

    for (let row = 0; row < T_HEIGHT; row++)
      for (let col = 0; col < T_WIDTH; col++)
        !board[row][col].merged
          ? (newBoard[row][col] = { type: 0, merged: false })
          : null;

    tetromino.shape.map((row, i) =>
      row.map((elm, j) => {
        if (elm !== 0)
          newBoard[i + tetromino.x][j + tetromino.y] = {
            type: elm,
            merged: false,
          };
      })
    );

    setBoard(newBoard);
  };
  return [board, updateBoard];
};

export default useBoard;
