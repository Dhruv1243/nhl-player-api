import { createContext, useState, useContext, useEffect } from "react";

const TeamContext = createContext({});

export const useTeamContext = () => useContext(TeamContext);

export const TeamProvider = ({ children }) => {
  const [favoriteTeams, setFavoriteTeams] = useState(() => {
    try {
      const stored = localStorage.getItem("favoriteTeams");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    console.log("Favorite teams updated:", favoriteTeams);
    localStorage.setItem("favoriteTeams", JSON.stringify(favoriteTeams)); //every time the favorite teams change, it will update the local storage
  }, [favoriteTeams]);

  const addFavoriteTeam = (team) => {
    setFavoriteTeams((prevTeams) => [...prevTeams, team]); //this is taking the previous teams and adding the new team
  };

  const removeFavoriteTeam = (teamId) => {
    setFavoriteTeams((prevTeams) =>
      prevTeams.filter((team) => team.id !== teamId)
    ); //this is generating a new array without the array that has the id of the team that we just removed
  };

  const isFavorite = (teamId) => {
    return favoriteTeams.some((team) => team.id === teamId); //checks all the teams in the array and if it finds one with the same id, it returns true
  };

  const value = {
    favoriteTeams,
    addFavoriteTeam,
    removeFavoriteTeam,
    isFavorite,
  };

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
};
