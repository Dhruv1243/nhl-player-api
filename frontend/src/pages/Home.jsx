import TeamCard from "../components/TeamCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const teams = [
    { id: 1, teamName: "Montreal Canadiens" },
    { id: 2, teamName: "Toronto Maple Leafs" },
    { id: 3, teamName: "Edmonton Oilers" },
  ];

  const handleSearch = (e) => {
    e.preventDefault(); // this prevent refresh of page so that search bar doesnt clear after every search
    alert(`Search for ${searchQuery}`);
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for teams..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            // console.log(e.target.value); this is only for debugging purposes
          }}
        />

        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      {/** 1. loop over teams array 
       * 2. check if teamName includes 
      searchQuery
       * 3. if yes, render TeamCard */}
      <div className="team-grid">
        {teams.map(
          (team) =>
            team.teamName.toLowerCase().includes(searchQuery.toLowerCase()) && (
              <TeamCard team={team} key={team.id} />
            )
        )}
      </div>
    </div>
  );
}
export default Home;
