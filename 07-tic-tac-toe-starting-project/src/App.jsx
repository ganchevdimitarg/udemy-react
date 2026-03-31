import Player from "./componets/Player.jsx";
import GameBoard from "./componets/GameBoard.jsx";
import {useState} from "react";

function App() {
    const [activePlayer, setActivePlayer] = useState('O');

    function handleSelectSquare() {
        setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
    }

    return (
        <main>
            <div id="game-container">
                PLAYERS
                <ol id="players" className="highlight-player">
                    <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
                    <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
            </div>

            LOG
        </main>
    )
}

export default App
