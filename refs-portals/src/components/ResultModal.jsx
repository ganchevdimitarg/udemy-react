// New way
import {useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

export default function ResultModal({ref, targetTime, timeRemaining, onReset}) {
    const dialog = useRef();

    const userLost = timeRemaining <= 0;
    const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });
    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your Score: {score}</h2>}
            <p>The target time was <strong>{targetTime}</strong> seconds.</p>
            <p>You stopped the timer with <strong>{formattedRemainingTime}</strong> seconds left.</p>
            <form method="dialog" onSubmit={onReset} onClose={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    );
}

// Old way
/*
import {forwardRef} from 'react';
const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
    return (<dialog ref={ref} className="result-modal" >
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime}</strong> seconds.</p>
        <p>You stopped the timer with <strong>X</strong> seconds left.</p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>)
});

export default ResultModal;*/
