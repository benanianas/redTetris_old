import { useState } from "react";
import { randomTetromino } from "../../utils/tetris";
import useBoard from "./useBoard";
import { useEffect } from "react";



const useTetromino = () => {
  const [board, updateBoard] = useBoard();

  const shape = randomTetromino().shape;
  const [tetromino, setTetromino] = useState({
    x: 0,
    y: 3,
    shape: shape,
    merged: false,
  });

  useEffect(() => {
    updateBoard(tetromino);
  }, [tetromino]);

  return [board, tetromino, setTetromino];
};

export default useTetromino;
