export const T_WIDTH = 10;
export const T_HEIGHT = 20;

export const createBoard = () =>
  Array.from(Array(T_HEIGHT), () =>
    new Array(T_WIDTH).fill({ type: 0, merged: false })
  );

export const TETRIMINOS = {
  0: {
    shape: [[0]],
    color: "0,0,0",
  },
  I: {
    shape: [
      [0, 0, 0, 0],
      ["I", "I", "I", "I"],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    color: "0,122,206",
  },
  J: {
    shape: [
      ["J", 0, 0],
      ["J", "J", "J"],
      [0, 0, 0],
    ],
    color: "0,0,115",
  },
  L: {
    shape: [
      [0, 0, "L"],
      ["L", "L", "L"],
      [0, 0, 0],
    ],
    color: "180,87,0",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "239,170,0",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "0,153,0",
  },
  T: {
    shape: [
      [0, "T", 0],
      ["T", "T", "T"],
      [0, 0, 0],
    ],
    color: "102,0,102",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "153,0,0",
  },
};

export const randomTetromino = () => {
  const all = ["I", "J", "L", "O", "S", "T", "Z"];
  return TETRIMINOS[all[Math.floor(Math.random() * all.length)]];
  // return TETRIMINOS["I"];
};
