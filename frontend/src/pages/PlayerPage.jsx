// src/pages/PlayersPage.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PlayerCard from "../components/PlayerCard"; // ← import your card
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
        setPlayers(await res.json());
      } catch {
        setError("Unable to load players");
      } finally {
        setLoading(false);
      }
    }
    loadRoster();
  }, [abbrev]);

  if (loading) return <p>Loading roster…</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="players-page">
      <Link to="/home" className="back-link">
        ← Back to teams
      </Link>
      <h2>Roster — {abbrev}</h2>
      <div className="player-grid">
        {players.map((p) => (
          <PlayerCard key={p.id} player={p} />
        ))}
      </div>
    </div>
  );
}
