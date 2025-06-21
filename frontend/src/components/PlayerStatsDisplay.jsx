import React from "react";
import "./PlayerStatsDisplay.css";

const PlayerStatsDisplay = ({ stats }) => {
  if (!stats) return <p>Loading stats...</p>;

  const {
    name,
    position,
    age,
    height,
    weight,
    shoots,
    stats: statBlock,
    careerStats: careerStatBlock,
  } = stats;

  const isGoalie = position === "G";

  return (
    <div className="player-stats-card">
      <h2>{name}</h2>
      <p>Position: {position}</p>
      <p>Age: {age}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Shoots: {shoots}</p>

      <h1>Current Season</h1>
      <div className="stats-section">
        <p>Games Played: {statBlock.gamesPlayed}</p>

        {isGoalie ? (
          <>
            <p>Save %: {statBlock.savePctg}</p>
            <p>Goals Against Avg: {statBlock.goalsAgainstAvg}</p>
            <p>Shutouts: {statBlock.shutouts}</p>
            <p>Wins: {statBlock.wins}</p>
            <p>Losses: {statBlock.losses}</p>
            <p>Overtime Losses: {statBlock.otLosses}</p>
          </>
        ) : (
          <>
            <p>Goals: {statBlock.goals}</p>
            <p>Assists: {statBlock.assists}</p>
            <p>Points: {statBlock.points}</p>
            <p>Shots: {statBlock.shots}</p>
            <p>+/-: {statBlock.plusMinus}</p>
            <p>PIM: {statBlock.pim}</p>
            <p>PP Goals: {statBlock.powerPlayGoals}</p>
            <p>SH Goals: {statBlock.shortHandedGoals}</p>
          </>
        )}
      </div>
      <h1>Career Stats</h1>
      <div className="stats-section">
        <p>Games Played: {careerStatBlock.gamesPlayed}</p>

        {isGoalie ? (
          <>
            <p>Save %: {careerStatBlock.savePctg}</p>
            <p>Goals Against Avg: {careerStatBlock.goalsAgainstAvg}</p>
            <p>Shutouts: {careerStatBlock.shutouts}</p>
            <p>Wins: {careerStatBlock.wins}</p>
            <p>Losses: {careerStatBlock.losses}</p>
            <p>Overtime Losses: {careerStatBlock.otLosses}</p>
          </>
        ) : (
          <>
            <p>Goals: {careerStatBlock.goals}</p>
            <p>Assists: {careerStatBlock.assists}</p>
            <p>Points: {careerStatBlock.points}</p>
            <p>Shots: {careerStatBlock.shots}</p>
            <p>+/-: {careerStatBlock.plusMinus}</p>
            <p>PIM: {careerStatBlock.pim}</p>
            <p>PP Goals: {careerStatBlock.powerPlayGoals}</p>
            <p>SH Goals: {careerStatBlock.shortHandedGoals}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PlayerStatsDisplay;
