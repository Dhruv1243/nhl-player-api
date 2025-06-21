import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PlayerStatsDisplay from "../components/PlayerStatsDisplay";
import "./PlayerStatsPage.css"; // Assuming you have a CSS file for styling

function PlayerStatsPage() {
  const { playerId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playerData, setPlayerData] = useState(null);
  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    async function loadStats() {
      try {
        setLoading(true);
        const res = await fetch(
          `${API_BASE}/api/teams/players/${playerId}/stats`
        );
        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();
        setPlayerData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError("Failed to load player stats");
        setLoading(false);
      }
    }

    loadStats();
  }, [playerId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <div className="stats-grid">
        <PlayerStatsDisplay stats={playerData} />
      </div>
    </div>
  );
}

export default PlayerStatsPage;
