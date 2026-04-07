import {useState, useRef} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timer = useRef(null);
    const dialog = useRef();
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    // Timer expired
    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStrat() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 10);
            }, 10);

    }

    // Manual stopped
    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} result="lost" targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStrat}>
                        {timerIsActive ? 'Stop Challenge' : 'Start Challenge'}
                    < /button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
};