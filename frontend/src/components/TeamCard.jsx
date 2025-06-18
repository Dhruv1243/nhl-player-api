import "./TeamCard.css";
import { Link } from "react-router-dom";

import { useTeamContext } from "../contexts/TeamContext";
function TeamCard({ team }) {
  // const [isFavorite, setIsFavorite] = useState(false);
  const { isFavorite, addFavoriteTeam, removeFavoriteTeam } = useTeamContext();
  const favorite = isFavorite(team.id);
  function toggleFavorite(e) {
    e.preventDefault();
    if (favorite) {
      //if its already in the favorites when liking, then it removes it from favorites and vice versa
      removeFavoriteTeam(team.id);
    } else {
      addFavoriteTeam(team);
    }
  }

  return (
    // Link is used to tranform the team abbreviation into a link that will take the user to the players page for that team
    <Link to={`/teams/${team.abbreviation}/players`} className="team-card-link">
      <div className="team-card">
        <div className="team-image">
          <img src={team.image} alt={team.teamName} />
          <div className="team-overlay">
            <button
              className={`favorite-btn ${favorite ? "active" : ""}`} //gives it the active class only if favorite is true unless its empty
              onClick={toggleFavorite}
            >
              {favorite ? "★" : "☆"}
            </button>
          </div>
        </div>
        <div className="team-name">
          <h3>{team.teamName}</h3>
        </div>
      </div>
    </Link>
  );
}

export default TeamCard;
