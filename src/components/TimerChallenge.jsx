import ResultModal from "./ResultModal.jsx";
import { useState, useRef } from "react";

export default function TimerChallenge({
  title,
  targetTime,
  updatePlayerScores,
}) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const score = ((1 - timeRemaining / (targetTime * 1000)) * 100).toFixed(2);
  const difficulty = title;
  const timerisActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  function handleEndRound() {
    clearInterval(timer.current);
    updatePlayerScores(score, difficulty);
    dialog.current.open();
  }

  if (timeRemaining <= 0) {
    handleEndRound();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    handleEndRound();
  }

  return (
    <>
      <ResultModal
        score={score}
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerisActive ? handleStop : handleStart}>
            {timerisActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerisActive ? "active" : undefined}>
          {timerisActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
