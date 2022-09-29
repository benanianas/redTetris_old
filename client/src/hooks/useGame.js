import useTetromino from "./useTetromino";
import { useEffect, useState } from "react";
import { T_WIDTH, T_HEIGHT } from "../../utils/tetris";
import { randomTetromino } from "../../utils/tetris";

const useGame = () => {
  const [board, tetromino, setTetromino] = useTetromino();
  const [gameStatus, setGameStatus] = useState(false);


  const checkPosition = ({ shape, x, y }) => {
    const check = { allow: true, merged: false, dir: "" };
    const N = shape.length;
    for (let i = 0; i < N; i++)
      for (let j = 0; j < N; j++) {
        if (shape[i][j] !== 0) {
          // if (x + i < 0) {
          //   setGameStatus(false);
          //   clearBoard();
          //   return { allow: false };
          // }
          if (y + j < 0) return { allow: false, dir: "l" };
          if (y + j >= T_WIDTH) return { allow: false, dir: "r" };
          if (x + i >= T_HEIGHT) return { allow: false, dir: "b" };
          if (x + i >= 0 && board[x + i][y + j].merged) {
            return({allow: false})
            // if (j >= shape.length / 2) return { allow: false, dir: "r" };
            // else {return { allow: false, dir: "l" };}
          }
          if (
            x + i + 1 === T_HEIGHT ||
            (x + i + 1 < T_HEIGHT && board[x + i + 1][y + j].merged)
          ) {
            check.merged = true;
          }
        }
      }
    return check;
  };

  const nextTetromino = () => {
    const shape = randomTetromino().shape;
    const fTetro = {
      shape,
      x: 0,
      y: shape.length === 2 ? 4 : 3,
      merged: false,
    };
    console.log(checkPosition(fTetro).allow)

    setTetromino(fTetro);

  };

  const start = () => {
    if (gameStatus) return;
    setGameStatus(true);
    const tetro = randomTetromino().shape;
    const fTetro = {
      x: 0,
      y: tetro.length === 2 ? 4 : 3,
      shape: tetro,
      merged: false,
    };
    setTetromino(fTetro);
  };

  const down = () => {
    if (!gameStatus || tetromino.merged) return;
    let x = T_HEIGHT - 1;
    while (!checkPosition({ ...tetromino, x }).allow) --x;
    if (x) setTetromino({ ...tetromino, x, merged: true });
    setTimeout(() => {
      nextTetromino(); 
    }, 500);
  };

  const move = (x, y) => {
    if (!gameStatus) return;
    const newTetromino = {
      ...tetromino,
      y: tetromino.y + y,
      x: tetromino.x + x,
    };
    const { allow, merged} = checkPosition(newTetromino);
    if (merged) {
      setTetromino({ ...tetromino, merged });
      console.log(board);
      setTimeout(() => {
        nextTetromino();
      }, 500);
    }
    if (allow) {
      setTetromino({ ...newTetromino, merged });
    }
  };

  const rotate = () => {
    if (!gameStatus) return;
    let newShape = Array.from(Array(tetromino.shape.length), () =>
      new Array(tetromino.shape.length).fill(0)
    );
    newShape = newShape.map((row, i) =>
      row.map((elm, j) => tetromino.shape[j][i]).reverse()
    );
    const newTetromino = { ...tetromino, shape: newShape };
    const { allow, dir } = checkPosition(newTetromino);
    if (allow) {
      setTetromino(newTetromino);
      return;
    }
    // TODO: refactor this stupid code !
    // clear lines
    // game over && start views
    let dist = newTetromino.shape.length - 2;
    if (dir === "r")
      newTetromino.y -= tetromino.shape[2][2] === "I" ? dist - 1 : dist;
    if (dir === "l")
      newTetromino.y += tetromino.shape[1][1] === "I" ? dist - 1 : dist;
    if (dir === "b")
      newTetromino.x -= tetromino.shape[2][2] === "I" ? dist - 1 : dist;
    if (checkPosition(newTetromino).allow) setTetromino(newTetromino);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameStatus) move(1, 0);
    }, 1000);
    return () => clearInterval(interval);
  });

  return [board, start, rotate, move, down];
};

export default useGame;
