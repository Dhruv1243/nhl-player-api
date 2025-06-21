import React from "react";
import "./PlayerCard.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";
function PlayerCard({ player }) {
  return (
    <Link to={`/players/${player.id}/stats`} className="player-card-link">
      <div className="player-card">
        <div className="player-image">
          <img src={player.image} alt={player.name} />
          <div className="player-overlay">
            <h2>{player.name}</h2>
            <h4>{player.position}</h4>
            <h4>#:{player.number}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default PlayerCard;
