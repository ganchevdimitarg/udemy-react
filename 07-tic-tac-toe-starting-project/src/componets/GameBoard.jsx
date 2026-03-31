import { useState } from "react";

const initBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
    const [board, setBoard] = useState(initBoard);

    function handleCellChange(rowIndex, colIndex) {
        setBoard((prevBoard) => {
            const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });
    }

    onSelectSquare();

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cell, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleCellChange(rowIndex, colIndex)}>
                                    {cell}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
