import React from "react";
import { StyledBlock } from "./styles/StyledBlock.jsx";
import { TETRIMINOS } from "../../utils/tetris.js";

const Block = ({type}) => {
    return (
        <StyledBlock color={TETRIMINOS[type].color}>block:{type} {TETRIMINOS[type].color}</StyledBlock>
    )
}

export default Block;