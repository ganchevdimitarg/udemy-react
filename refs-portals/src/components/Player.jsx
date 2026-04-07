import {useState, Ref, useRef} from "react";

export default function Player() {
    const inputUsername = useRef();
    const [username, setUsername] = useState(null);

    function handleClick() {
        setUsername(inputUsername.current.value);
    }
    return (
        <section id="player">
            <h2>Welcome {username ?? 'unknown entity'}</h2>
            <p>
                <input ref={inputUsername} type="text" />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
