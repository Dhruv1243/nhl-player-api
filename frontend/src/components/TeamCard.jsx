function TeamCard({ team }) {
  function onFavoriteClick() {
    alert(`clicked`);
  }
  return (
    <div className="team-card">
      <div className="team-image">
        <img src={team.image} alt={team.teamName} />
        <div className="team-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            👍
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
