// nhlTeams.js
import API_BASE from "../env";
export const fetchAllTeams = async () => {
  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

  try {
    const res = await fetch(`${API_BASE}/api/teams`);

    // Check if the response is ok
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Received data:", data); // Debug log

    // Check if we received an error object
    if (data.message && data.message.includes("Failed to fetch")) {
      console.error("Backend returned error:", data);
      return [];
    }

    // Ensure data is an array before mapping
    if (!Array.isArray(data)) {
      console.error("Expected array but got:", typeof data, data);
      return [];
    }
    console.log("Active teams:", data);
    const teamsWithLogos = data.map((team) => {
      const teamId = team.id;
      const teamName =
        team.teamName ||
        team.name ||
        team.teamFullName ||
        team.fullName ||
        "Unknown Team";

      const abbreviation = team.abbreviation;

      return {
        id: teamId,
        teamName,
        abbreviation,
        image: `https://assets.nhle.com/logos/nhl/svg/${abbreviation}_light.svg`,
      };
    });

    return teamsWithLogos;
  } catch (err) {
    console.error("Failed to fetch NHL teams:", err);
    return [];
  }
};
