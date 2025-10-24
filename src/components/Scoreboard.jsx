export default function Scoreboard({ playerScores }) {
  //create a new variable and loop through player scores to output list with the stored name and score from the object
  return (
    <section className="scoreboard">
      <h1>Player Scores:</h1>
      {!playerScores.length > 0 && <p>Please start a challenge for a score.</p>}
      {playerScores.length > 0 && (
        <ul>
          {playerScores &&
            playerScores.map((playerScoreObject, index) => (
              <li key={index}>
                <span>[{playerScoreObject.playerName}:</span>
                <span>
                  Difficulty -{">"} {playerScoreObject.difficulty},
                </span>
                <span>Score: {playerScoreObject.score}]</span>
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}
