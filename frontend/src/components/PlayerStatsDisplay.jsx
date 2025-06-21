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
    draftInfo: draftInfoBlock,
    careerPlayoffStats: careerPlayoffStatsBlock,
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
      <p>Nationality: {stats.hometown}</p>
      <p>Year Drafted: {draftInfoBlock.year}</p>
      <p>Overall Pick: {draftInfoBlock.overallPick}</p>
      <p>Drafted By: {draftInfoBlock.team}</p>

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
      <h1>Career Playoff Stats</h1>
      <div className="stats-section">
        <p>Games Played: {careerPlayoffStatsBlock.gamesPlayed}</p>

        {isGoalie ? (
          <>
            <p>Save %: {careerPlayoffStatsBlock.savePctg}</p>
            <p>Goals Against Avg: {careerPlayoffStatsBlock.goalsAgainstAvg}</p>
            <p>Shutouts: {careerPlayoffStatsBlock.shutouts}</p>
            <p>Wins: {careerPlayoffStatsBlock.wins}</p>
            <p>Losses: {careerPlayoffStatsBlock.losses}</p>
            <p>Overtime Losses: {careerPlayoffStatsBlock.otLosses}</p>
          </>
        ) : (
          <>
            <p>Goals: {careerPlayoffStatsBlock.goals}</p>
            <p>Assists: {careerPlayoffStatsBlock.assists}</p>
            <p>Points: {careerPlayoffStatsBlock.points}</p>
            <p>Shots: {careerPlayoffStatsBlock.shots}</p>
            <p>+/-: {careerPlayoffStatsBlock.plusMinus}</p>
            <p>PIM: {careerPlayoffStatsBlock.pim}</p>
            <p>PP Goals: {careerPlayoffStatsBlock.powerPlayGoals}</p>
            <p>SH Goals: {careerPlayoffStatsBlock.shortHandedGoals}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PlayerStatsDisplay;
