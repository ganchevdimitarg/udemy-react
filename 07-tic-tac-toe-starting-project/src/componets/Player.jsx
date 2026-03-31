import {useState} from "react";

export default function Player({name, symbol, isActive}) {
    let [getName,setName] = useState(name);
    const [isEditing, setIsEditing] = useState(false)

    function handleEditingClick() {
        setIsEditing((prev) => !prev)
    }

    function handleChange(event) {
        setName(event.target.value)
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {isEditing
                    ? <span className="player-name" >{getName}</span>
                    : <input type="text" required placeholder={getName} onChange={handleChange} />}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleEditingClick}>{isEditing ? "Edit" : "Save"}</button>
            </span>
        </li>
    )
}