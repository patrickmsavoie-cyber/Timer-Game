import { useState, useRef } from "react";

export default function Player({ setPlayerName, handleClick, playerName }) {
  const [inputValue, setInputValue] = useState("");
  const player = useRef();

  function handleClick() {
    setPlayerName(player.current.value);
    setInputValue("");
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={player}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
