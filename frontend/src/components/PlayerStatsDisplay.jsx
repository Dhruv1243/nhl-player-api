import React from "react";

const PlayerStatsDisplay = ({ stats }) => {
  if (!stats) return <p>Loading stats...</p>;

  const isGoalie = stats.position === "G";

  return (
    <div className="player-stats-card">
      <h2>{stats.name}</h2>
      <p>Position: {stats.position}</p>
      <p>Age: {stats.age}</p>
      <p>Height: {stats.height}</p>
      <p>Weight: {stats.weight}</p>
      <p>Shoots: {stats.shoots}</p>

      {isGoalie ? (
        <div className="goalie-stats">
          <p>Games Played: {stats.games}</p>
          <p>Save %: {stats.savePercentage}</p>
          <p>Goals Against Avg: {stats.goalsAgainstAverage}</p>
        </div>
      ) : (
        <div className="skater-stats">
          <p>Games Played: {stats.games}</p>
          <p>Goals: {stats.goals}</p>
          <p>Assists: {stats.assists}</p>
          <p>Points: {stats.points}</p>
        </div>
      )}
    </div>
  );
};

export default PlayerStatsDisplay;
