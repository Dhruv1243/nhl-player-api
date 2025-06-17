// Fetch all NHL teams with their name and logo image
export const fetchAllTeams = async () => {
  try {
    const res = await fetch(
      `https://corsproxy.io/?https://statsapi.web.nhl.com/api/v1/teams`
    );

    const rawData = await res.json();
    const data = JSON.parse(rawData.contents); // real API data is inside `.contents`

    const teamsWithLogos = data.teams.map((team) => ({
      id: team.id,
      teamName: team.name,
      image: `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.id}.svg`,
    }));

    return teamsWithLogos;
  } catch (err) {
    console.error("Failed to fetch NHL teams:", err);
    return []; // Return empty array if there's an error
  }
};
