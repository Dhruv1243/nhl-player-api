import TeamCard from "./components/TeamCard";
import FacoriteTeams from "./pages/FavoriteTeams.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoriteTeams" element={<FacoriteTeams />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
