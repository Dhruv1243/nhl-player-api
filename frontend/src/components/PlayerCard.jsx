import React from "react";
import "./PlayerCard.css"; // Assuming you have a CSS file for styling
function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <div className="player-image">
        <img src={player.image} alt={player.name} />
        <div className="player-overlay">
          <h3>{player.name}</h3>
          <h4>{player.position}</h4>
          <h4>#:{player.number}</h4>
        </div>
      </div>
    </div>
  );
}
export default PlayerCard;
