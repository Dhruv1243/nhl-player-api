import fetch from "node-fetch";

export const getTeams = async (req, res) => {
  try {
    const activeTeamIds = [
      8, 7, 2, 28, 29, 13, 12, 54, 52, 14, 18, 1, 9, 21, 15, 26, 30, 24, 23, 4,
      16, 68, 10, 55, 5, 6, 25, 22, 20, 19, 17, 3,
    ];

    const response = await fetch("https://api.nhle.com/stats/rest/en/team");
    const rawData = await response.json();

    const activeTeams = rawData.data.filter((team) =>
      activeTeamIds.includes(team.id)
    );

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
};

export const getStats = async (req, res) => {
  const playerId = req.params.playerId;
  const NHL_API_URL = `https://api-web.nhle.com/v1/player/${playerId}/landing`;

  try {
    console.log(`Fetching stats for player: ${playerId}`);
    const response = await fetch(NHL_API_URL);

    if (!response.ok) {
      throw new Error(`NHL API error: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data || !data.featuredStats?.regularSeason?.subSeason) {
      console.error("❌ Player data missing or incomplete");
      return res.status(404).json({ error: "Player data not found" });
    }

    const stats = data.featuredStats.regularSeason.subSeason;
    const careerStats = data.featuredStats.careerSeason;

    const playerInfo = {
      id: playerId,
      name: `${data.firstName?.default || "Unknown"} ${
        data.lastName?.default || ""
      }`,
      number: data.sweaterNumber || "N/A",
      position: data.position || "N/A",
      team: data.fullTeamName?.default || "N/A",
      teamLogo: data.teamLogo || null,
      age: calculateAge(data.birthDate),
      height: formatHeight(data.heightInInches),
      weight: `${data.weightInPounds || "?"} lbs`,
      shoots: data.shootsCatches || "N/A",
      headshot: data.headshot || null,
      stats: {
        gamesPlayed: stats.gamesPlayed ?? "N/A",
        goals: stats.goals ?? "N/A",
        assists: stats.assists ?? "N/A",
        points: stats.points ?? "N/A",
        shots: stats.shots ?? "N/A",
        plusMinus: stats.plusMinus ?? "N/A",
        pim: stats.pim ?? "N/A",
        powerPlayGoals: stats.powerPlayGoals ?? "N/A",
        shortHandedGoals: stats.shorthandedGoals ?? "N/A",
        goalsAgainstAvg: stats.goalsAgainstAvg ?? "N/A",
        savePctg: stats.savePctg ?? "N/A",
        shutouts: stats.shutouts ?? "N/A",
        wins: stats.wins ?? "N/A",
        losses: stats.losses ?? "N/A",
      },
      careerStats: {
        gamesPlayed: careerStats.gamesPlayed ?? "N/A",
        goals: careerStats.goals ?? "N/A",
        assists: careerStats.assists ?? "N/A",
        points: careerStats.points ?? "N/A",
        shots: careerStats.shots ?? "N/A",
        plusMinus: careerStats.plusMinus ?? "N/A",
        pim: careerStats.pim ?? "N/A",
        powerPlayGoals: careerStats.powerPlayGoals ?? "N/A",
        shortHandedGoals: careerStats.shorthandedGoals ?? "N/A",
        goalsAgainstAvg: careerStats.goalsAgainstAvg ?? "N/A",
        savePctg: careerStats.savePctg ?? "N/A",
        shutouts: careerStats.shutouts ?? "N/A",
        wins: careerStats.wins ?? "N/A",
        losses: careerStats.losses ?? "N/A",
      },
    };

    res.json(playerInfo);
  } catch (err) {
    console.error("🔥 BACKEND ERROR:", err.message);
    res.status(500).json({ error: "Failed to fetch player stats" });
  }
};

// Helper to calculate age
function calculateAge(birthDateStr) {
  if (!birthDateStr) return "Unknown";
  const birthDate = new Date(birthDateStr);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Helper to format height from inches to ft'in"
function formatHeight(inches) {
  if (!inches) return "Unknown";
  const ft = Math.floor(inches / 12);
  const rem = inches % 12;
  return `${ft}'${rem}"`;
}

export const getPlayers = async (req, res) => {
  //pull the abbrev param out of url
  const { abbrev } = req.params;
  //the response will also require a season so we just hardcode it for now
  //this is the 2024-2025 season, you can change it to any valid NHL season
  // const season = "20242025";

  try {
    //fetch the roster for the team with the given abbreviation and season
    const response = await fetch(
      `https://api-web.nhle.com/v1/roster/${abbrev}/current`
    );
    //if theres an error with the response, return a 500 status code
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: `NHL API error: ${response.statusText}` });
    }
    //parse the response as JSON
    const json = await response.json();
    // json now has { forwards: [...], defensemen: [...], goalies: [...] }

    // 1. Pull out each group (falling back to empty array if missing)
    const forwards = Array.isArray(json.forwards) ? json.forwards : [];
    const defensemen = Array.isArray(json.defensemen) ? json.defensemen : [];
    const goalies = Array.isArray(json.goalies) ? json.goalies : [];

    // 2. Combine them into one flat array
    const allPlayers = [...forwards, ...defensemen, ...goalies];

    // 3. Map to the shape your frontend expects
    const players = allPlayers.map((p) => ({
      id: p.id,
      name: `${p.firstName.default} ${p.lastName.default}`,
      position: p.positionCode, // use the single‐letter code or map it if you prefer
      number: p.sweaterNumber,
      image: p.headshot, // if you want to display the mugshot
    }));
    //send our trimmed down players data
    res.json(players);
  } catch (err) {
    //to check if anything went wrong
    console.error(`Error fetching roster for ${abbrev}:`, err);
    res.status(500).json({ message: "Failed to fetch players" });
  }
};
