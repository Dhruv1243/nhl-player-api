import { useState, useEffect } from "react";
import { fetchAllTeams } from "../api/nhlTeams";
import TeamCard from "../components/TeamCard";
import "./Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTeams = async () => {
      try {
        setLoading(true);
        setError(null);

        const teamsData = await fetchAllTeams();

        if (teamsData.length === 0) {
          setError("Unable to load NHL teams data. Please try again later.");
        } else {
          setTeams(teamsData);
          console.log(`Successfully loaded ${teamsData.length} teams`);
        }
      } catch (err) {
        console.error("Error in loadTeams:", err);
        setError(
          "Failed to load teams data. Please check your connection and try again."
        );
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  const filteredTeams = teams.filter((team) =>
    team.teamName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="home">
        <div className="loading">Loading NHL teams...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home">
        <div className="error">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <form onSubmit={(e) => e.preventDefault()} className="search-form">
        <input
          type="text"
          placeholder="Search for teams..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      <div className="team-grid">
        {filteredTeams.length > 0 ? (
          filteredTeams.map((team) => <TeamCard key={team.id} team={team} />)
        ) : searchQuery ? (
          <div className="no-results">
            No teams found matching "{searchQuery}"
          </div>
        ) : (
          <div className="no-teams">No teams available</div>
        )}
      </div>
    </div>
  );
}

export default Home;
