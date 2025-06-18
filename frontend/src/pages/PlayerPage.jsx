// src/pages/PlayersPage.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PlayersPage.css";

export default function PlayersPage() {
  const { abbrev } = useParams();
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRoster() {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:5000/api/teams/${abbrev}/players`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        setPlayers(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load players");
      } finally {
        setLoading(false);
      }
    }
    loadRoster();
  }, [abbrev]);

  if (loading) return <p>Loading roster…</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="players-page">
      <Link to="/home">← Back to teams</Link>
      <h2>Roster — {abbrev}</h2>
      <ul className="player-list">
        {players.map((p) => (
          <li key={p.id}>
            #{p.number} — {p.name} ({p.position})
          </li>
        ))}
      </ul>
    </div>
  );
}
