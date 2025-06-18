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

export const getPlayers = async (req, res) => {
  //pull the abbrev param out of url
  const { abbrev } = req.params;
  //the response will also require a season so we just hardcode it for now
  //this is the 2024-2025 season, you can change it to any valid NHL season
  const season = "20242025";

  try {
    //fetch the roster for the team with the given abbreviation and season
    const response = await fetch(
      `https://api-web.nhle.com/v1/roster/${abbrev}/${season}`
    );
    //if theres an error with the response, return a 500 status code
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: `NHL API error: ${response.statusText}` });
    }
    //parse the response as JSON
    const json = await response.json();

    //map the players data to a simpler format
    //p is each player object in the players array, it can be called anything. we just need to get the name, position, and jersey number
    //the ? is = to if json.date is not null or undefined, then access the players property, otherwise use an empty array
    //this is a safe way to access nested properties in JavaScript
    const players = (json.data?.players || []).map((p) => ({
      id: p.person.id,
      name: p.person.fullName,
      position: p.position.name,
      number: p.jerseyNumber,
    }));
    //send our trimmed down players data
    res.json(players);
  } catch (err) {
    //to check if anything went wrong
    console.error(`Error fetching roster for ${abbrev}:`, err);
    res.status(500).json({ message: "Failed to fetch players" });
  }
};
