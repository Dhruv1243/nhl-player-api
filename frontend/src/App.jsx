import "./App.css";
import TeamCard from "./components/TeamCard";
import FacoriteTeams from "./pages/FavoriteTeams.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoriteTeams" element={<FacoriteTeams />} />
      </Routes>
    </main>
  );
}

export default App;
