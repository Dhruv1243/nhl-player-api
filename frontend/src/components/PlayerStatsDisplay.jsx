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
  } = stats;

  const isGoalie = position === "G";

  return (
    <div className="player-stats-card">
      <h2>{name} 2024-2025 Season</h2>
      <p>Position: {position}</p>
      <p>Age: {age}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Shoots: {shoots}</p>

      <div className="stats-section">
        <p>Games Played: {statBlock.gamesPlayed}</p>

        {isGoalie ? (
          <>
            <p>Save %: {statBlock.savePctg}</p>
            <p>Goals Against Avg: {statBlock.goalsAgainstAvg}</p>
            <p>Shutouts: {statBlock.shutouts}</p>
            <p>Wins: {statBlock.wins}</p>
            <p>Losses: {statBlock.losses}</p>
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
    </div>
  );
};

export default PlayerStatsDisplay;
