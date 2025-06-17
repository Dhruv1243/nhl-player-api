import "./TeamCard.css";
import { useState } from "react";
function TeamCard({ team }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
    console.log(team);
  }

  return (
    <div className="team-card">
      <div className="team-image">
        <img src={team.image} alt={team.teamName} />
        <div className="team-overlay">
          <button
            className={`favorite-btn ${isFavorite ? "active" : ""}`} //gives it the active class only if isFavorite is true unless its empty
            onClick={toggleFavorite}
          >
            {isFavorite ? "★" : "☆"}
          </button>
        </div>
      </div>
      <div className="team-name">
        <h3>{team.teamName}</h3>
      </div>
    </div>
  );
}

export default TeamCard;
