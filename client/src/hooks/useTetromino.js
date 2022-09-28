import { useState } from "react";
import { randomTetromino } from "../../utils/tetris";
import useBoard from "./useBoard";
import { useEffect } from "react";

const useTetromino = () => {
  const [board, updateBoard] = useBoard();

  const [tetromino, setTetromino] = useState({
    x: 0,
    y: 3,
    shape: randomTetromino().shape,
    merged: false,
  });

  useEffect(() => {
    updateBoard(tetromino);
  }, [tetromino]);

  const updateTetromino = (tetromino) => {
    setTetromino(tetromino);
    
    if (tetromino.merged)
      setTimeout(
        () =>
          setTetromino({
            x: 0,
            y: 3,
            shape: randomTetromino().shape,
            merged: false,
          }),
        400
      );
  };

  return [board, tetromino, updateTetromino];
};

export default useTetromino;
