import React from "react";
import Block from "./Block.jsx";

const Board = ({board}) => {
    return (
        <div>
            {
                board.map(row => row.map((block, i) => <Block key={i} type={block}/>))
            }
        </div>
    )
}

export default Board;
