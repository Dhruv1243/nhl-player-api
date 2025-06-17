import "./Home.css";
import { useTeamContext } from "../contexts/TeamContext";
import TeamCard from "../components/TeamCard";
function FavoriteTeams() {
  const { favoriteTeams } = useTeamContext();

  if (favoriteTeams) {
    return (
      <div className="favorite-teams">
        <h2>Favorite Teams</h2>
        <p>Click the star to remove from favorites</p>
        <div className="team-grid">
          {favoriteTeams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorite-teams">
      <h2>No Favorite Teams Yet</h2>
      <p>You can add favorite teams from the home page</p>
    </div>
  );
}

export default FavoriteTeams;
