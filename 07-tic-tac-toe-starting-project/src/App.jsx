import Player from "./componets/Player.jsx";
import GameBoard from "./componets/GameBoard.jsx";
import GameOver from "./componets/GameOver.jsx";
import {useState} from "react";
import Log from "./componets/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }

    return currentPlayer;
}

function deriveGameBoard(gameTurns) {
    let board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        board[row][col] = player;
    }
    return board;
}

function deriveWinner(gameBoard, playersNames) {
    let winner;
    for (const combination of WINNING_COMBINATIONS) {
        let firstCell = gameBoard[combination[0].row][combination[0].column];
        let secondCell = gameBoard[combination[1].row][combination[1].column];
        let thirdCell = gameBoard[combination[2].row][combination[2].column];
        if (firstCell && firstCell === secondCell && firstCell === thirdCell) {
            winner = playersNames[firstCell];
        }
    }
    return winner;
}

const PLAYERS = {
    X: 'Player 1',
    O: 'Player 2',
};

function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [playersNames, setPlayersNames] = useState(PLAYERS);

    let activePlayer = deriveActivePlayer(gameTurns);

    const board = deriveGameBoard(gameTurns);

    const winner = deriveWinner(board, playersNames);

    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevState => {
            let currentPlayer = deriveActivePlayer(prevState);

            return [
                {
                    square: {row: rowIndex, col: colIndex},
                    player: currentPlayer
                },
                ...prevState
            ];
        })
    }

    function handleRestart() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(symbol, newName) {
        return setPlayersNames(prev => {
            return {
                ...prev,
                [symbol]: newName
            };
        })
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player name={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
                    <Player name={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
                <GameBoard onSelectSquare={handleSelectSquare} board={board}/>
            </div>

            <Log turns={gameTurns}/>
        </main>
    )
}

export default App
