export const T_WIDTH = 10;
export const T_HEIGHT = 20;

export const createBoard = () => Array.from(Array(T_HEIGHT), () => new Array(T_WIDTH).fill(0));

export const tertriminos = {
  I: {
    shape: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    color: "#007ace",
  },
  J: {
    shape: [
      [0, 0, 0],
      [1, 0, 0],
      [1, 1, 1],
    ],
    color: "#000073",
  },
  L: {
    shape: [
      [0, 0, 0],
      [0, 0, 1],
      [1, 1, 1],
    ],
    color: "#b45700",
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "#efaa00",
  },
  S: {
    shape: [
      [0, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: "#009900",
  },
  T: {
    shape: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
    color: "#660066",
  },
  Z: {
    shape: [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: "#990000",
  },
};
