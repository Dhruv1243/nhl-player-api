import FavoriteTeams from "./pages/FavoriteTeams.jsx";
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
        </Routes>
      </main>
    </TeamProvider>
  );
}

export default App;
