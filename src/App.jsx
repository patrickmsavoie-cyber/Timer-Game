import Player from "./components/Player.jsx";
import Scoreboard from "./components/Scoreboard.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
import { useState } from "react";

function App() {
  const [playerName, setPlayerName] = useState("Uknown Entity");
  const [playerScores, setPlayerScores] = useState([]);

  function updatePlayerScores(score, difficulty) {
    setPlayerScores((prevScores) => {
      const newScores = [
        ...prevScores,
        { playerName: playerName, difficulty: difficulty, score: score },
      ];
      return newScores;
    });
  }

  return (
    <>
      <Player playerName={playerName} setPlayerName={setPlayerName} />
      <div id="challenges">
        <TimerChallenge
          updatePlayerScores={updatePlayerScores}
          title="Easy"
          targetTime={1}
        />
        <TimerChallenge
          updatePlayerScores={updatePlayerScores}
          title="Not easy"
          targetTime={5}
        />
        <TimerChallenge
          updatePlayerScores={updatePlayerScores}
          title="Getting tough"
          targetTime={10}
        />
        <TimerChallenge
          updatePlayerScores={updatePlayerScores}
          title="Pros only"
          targetTime={15}
        />
      </div>

      <Scoreboard playerScores={playerScores} />
    </>
  );
}

export default App;
