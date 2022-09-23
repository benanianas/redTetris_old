export const T_WIDTH = 10;
export const T_HEIGHT = 20;

export const createBoard = () => Array.from(Array(T_HEIGHT), () => new Array(T_WIDTH).fill(0));

export const TETRIMINOS = {
  0: {
    shape: [[0]],
    color: "",
  },
  I: {
    shape: [
      [0, 0, 0, 0],
      ['I', 'I', 'I', 'I'],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    color: "#007ace",
  },
  J: {
    shape: [
      [0, 0, 0],
      ['J', 0, 0],
      ['J', 'J', 'J'],
    ],
    color: "#000073",
  },
  L: {
    shape: [
      [0, 0, 0],
      [0, 0, 'L'],
      ['L', 'L', 'L'],
    ],
    color: "#b45700",
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O'],
    ],
    color: "#efaa00",
  },
  S: {
    shape: [
      [0, 0, 0],
      [0, 'S', 'S'],
      ['S', 'S', 0],
    ],
    color: "#009900",
  },
  T: {
    shape: [
      [0, 0, 0],
      [0, 'T', 0],
      ['T', 'T', 'T'],
    ],
    color: "#660066",
  },
  Z: {
    shape: [
      [0, 0, 0],
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
    ],
    color: "#990000",
  },
};
