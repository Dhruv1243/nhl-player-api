import { useState, useEffect } from "react";
import { fetchAllTeams } from "../api/nhlTeams"; // adjust if needed
import TeamCard from "../components/TeamCard";
import "./Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchAllTeams().then(setTeams);
  }, []);

  const filteredTeams = teams.filter((team) =>
    team.teamName.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        {filteredTeams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}

export default Home;
