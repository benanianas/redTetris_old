import useTetromino from "./useTetromino";
import { useEffect } from "react";
import { T_WIDTH, T_HEIGHT } from "../../utils/tetris";

const useGame = () => {
  const [board, tetromino, setTetromino] = useTetromino();

  const checkPosition = (tetromino) => {
    const N = tetromino.shape.length;
    for (let i = 0; i < N; i++)
      for (let j = 0; j < N; j++) {
        if (tetromino.shape[i][j] !== 0) {
          if (tetromino.y + j >= T_WIDTH) return { allow: false, right: true };
          if (tetromino.y + j < 0) return { allow: false, left: true };
          if (tetromino.x + i >= T_HEIGHT)
            return { allow: false, bottom: true };
        }
      }
    return { allow: true };
  };

  const move = (x, y) => {
    const newTetromino = {
      ...tetromino,
      y: tetromino.y + y,
      x: tetromino.x + x,
    };
    if (checkPosition(newTetromino).allow) setTetromino(newTetromino);
  };

  const rotate = () => {
    let newShape = Array.from(Array(tetromino.shape.length), () =>
      new Array(tetromino.shape.length).fill(0)
    );
    newShape = newShape.map((row, i) =>
      row.map((elm, j) => tetromino.shape[j][i]).reverse()
    );
    const newTetromino = { ...tetromino, shape: newShape };
    const { allow, right, left, bottom } = checkPosition(newTetromino);
    if (allow) {
      setTetromino(newTetromino);
      return;
    }
    let dist = newTetromino.shape.length - 2;
    if (right)
      newTetromino.y -= tetromino.shape[2][2] === "I" ? dist - 1 : dist;
    if (left) newTetromino.y += tetromino.shape[1][1] === "I" ? dist - 1 : dist;
    if (bottom)
      newTetromino.x -= tetromino.shape[2][2] === "I" ? dist - 1 : dist;
    if (checkPosition(newTetromino)) setTetromino(newTetromino);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      move(1, 0);
    }, 1000);
    return () => clearInterval(interval);
  });

  return [board, rotate, move];
};

export default useGame;
