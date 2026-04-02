import {useState} from "react";

export default function Player({name, symbol, isActive, onChangeName}) {
    const [playerName,setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false)

    function handleEditingClick() {
        setIsEditing((prev) => !prev)
        if (!isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {isEditing
                    ? <span className="player-name" >{playerName}</span>
                    : <input type="text" required placeholder={playerName} onChange={handleChange} />}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditingClick}>{isEditing ? "Edit" : "Save"}</button>
            </span>
        </li>
    )
}