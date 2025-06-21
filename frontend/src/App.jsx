import FavoriteTeams from "./pages/FavoriteTeams.jsx";
import PlayerPage from "./pages/PlayerPage.jsx";
import PlayerStatsPage from "./pages/PlayerStatsPage.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { TeamProvider } from "./contexts/TeamContext.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <TeamProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favoriteTeams" element={<FavoriteTeams />} />
          <Route path="/teams/:abbrev/players" element={<PlayerPage />} />
          {/* the abbrev is dynamic part of the URL that will be replaced with the actual team abbreviation */}
          <Route
            path="/players/:playerId/stats"
            element={<PlayerStatsPage />}
          />
          {/* the playerId is dynamic part of the URL that will be replaced with the actual player ID */}
        </Routes>
      </main>
    </TeamProvider>
  );
}

export default App;
