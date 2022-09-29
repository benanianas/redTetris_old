import { useState } from "react";
// import { randomTetromino } from "../../utils/tetris";
import useBoard from "./useBoard";
import { useEffect } from "react";

const useTetromino = () => {
  const [board, updateBoard] = useBoard();
  const [tetromino, setTetromino] = useState();

  useEffect(() => {
    updateBoard(tetromino);
  }, [tetromino]);

  // const updateTetromino = (tetromino) => {
  //   setTetromino(tetromino);
  // };

  return [board, tetromino, setTetromino];
};

export default useTetromino;
