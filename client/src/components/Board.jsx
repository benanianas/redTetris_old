import React from "react";
import Block from "./Block.jsx";
import StyledBoard from "./styles/StyledBoard.jsx";

const Board = ({ board }) => {
  return (
    <StyledBoard>
      {board.map((row) =>
        row.map((block, i) => <Block key={i} type={block.type} />)
      )}
    </StyledBoard>
  );
};

export default Board;
