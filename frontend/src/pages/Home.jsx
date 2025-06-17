import TeamCard from "../components/TeamCard";

function Home() {
  const teams = [
    { id: 1, teamName: "test" },
    { id: 2, teamName: "test2" },
    { id: 3, teamName: "test3" },
  ];

  const handleSearch = () => {
    console.log("search");
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for teams..."
          className="search-input"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="team-grid">
        {teams.map((team) => (
          <TeamCard team={team} key={team.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
