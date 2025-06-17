import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 5000;

app.use(cors());

// List of active team IDs you gave me
const activeTeamIds = [
  8, 7, 2, 28, 29, 13, 12, 54, 52, 14, 18, 1, 9, 21, 15, 26, 30, 24, 23, 4, 16,
  68, 10, 55, 5, 6, 25, 22, 20, 19, 17, 3,
];

app.get("/api/teams", async (req, res) => {
  try {
    const response = await fetch("https://api.nhle.com/stats/rest/en/team");
    const rawData = await response.json();

    // Filter only active teams by id
    const activeTeams = rawData.data.filter((team) =>
      activeTeamIds.includes(team.id)
    );

    // Format for frontend
    const formattedTeams = activeTeams.map((team) => ({
      id: team.id,
      name: team.fullName,
      abbreviation: team.triCode,
    }));

    res.json(formattedTeams);
  } catch (err) {
    console.error("Error fetching NHL teams:", err);
    res.status(500).json({ message: "Failed to fetch NHL data" });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Proxy server running at http://localhost:${PORT}`)
);
