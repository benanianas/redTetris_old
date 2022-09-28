import useTetromino from "./useTetromino";
import { useEffect } from "react";
import { T_WIDTH, T_HEIGHT } from "../../utils/tetris";

const useGame = () => {
  const [board, tetromino, updateTetromino] = useTetromino();

  const checkPosition = ({ shape, x, y }) => {
    const check = { allow: true, merged: false, dir: "" };
    const N = shape.length;
    for (let i = 0; i < N; i++)
      for (let j = 0; j < N; j++) {
        if (shape[i][j] !== 0) {
          if (y + j < 0) return { allow: false, dir: "l" };
          if (y + j >= T_WIDTH) return { allow: false, dir: "r" };
          if (x + i >= T_HEIGHT) return { allow: false, dir: "b" };
          if (board[x + i][y + j].merged && board[x + i][y + j].type !== 0) {
            console.log("oooo");
            return { allow: false, dir: "r" };
          }
          if (x + i + 1 === T_HEIGHT) {
            check.allow = true;
            check.merged = true;
          }
          if (x + i + 1 < T_HEIGHT && board[x + i + 1][y + j].merged) {
            check.allow = true;
            check.merged = true;
          }
        }
      }
    return check;
  };

  const down = () => {
    // let i = 19;
    // while (checkPosition({ ...tetromino, x: 18, y: 3 }).allow) i--;
    // updateTetromino({ ...tetromino, x: i, merged: true });
    let i = 1;
    while (
      checkPosition({
        ...tetromino,
        x: tetromino.x + i,
      }).allow
    ) {
      i++;
    }
    updateTetromino({...tetromino, x: tetromino.x + i -1, merged: true})
  };

  const move = (x, y) => {
    const newTetromino = {
      ...tetromino,
      y: tetromino.y + y,
      x: tetromino.x + x,
    };
    console.log(tetromino.x + x);
    const { allow, merged } = checkPosition(newTetromino);
    if (merged) updateTetromino({ ...tetromino, merged });
    if (allow) updateTetromino({ ...newTetromino, merged });
  };

  const rotate = () => {
    let newShape = Array.from(Array(tetromino.shape.length), () =>
      new Array(tetromino.shape.length).fill(0)
    );
    newShape = newShape.map((row, i) =>
      row.map((elm, j) => tetromino.shape[j][i]).reverse()
    );
    const newTetromino = { ...tetromino, shape: newShape };
    const { allow, dir } = checkPosition(newTetromino);
    if (allow) {
      updateTetromino(newTetromino);
      return;
    }
    // TODO: refactor this stupid code !
    let dist = newTetromino.shape.length - 2;
    if (dir === "r")
      newTetromino.y -= tetromino.shape[2][2] === "I" ? dist - 1 : dist;
    if (dir === "l")
      newTetromino.y += tetromino.shape[1][1] === "I" ? dist - 1 : dist;
    if (dir === "b")
      newTetromino.x -= tetromino.shape[2][2] === "I" ? dist - 1 : dist;
    if (checkPosition(newTetromino).allow) updateTetromino(newTetromino);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      move(1, 0);
    }, 1000);
    return () => clearInterval(interval);
  });

  return [board, rotate, move, down];
};

export default useGame;
