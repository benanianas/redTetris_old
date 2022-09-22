import React from "react";
import Board from "./Board.jsx"

import { createBoard } from "../../utils/tetris.js"

const Tetris = () => {
    return (
        <div><Board board={createBoard()}/></div>
    )
}


export default Tetris;