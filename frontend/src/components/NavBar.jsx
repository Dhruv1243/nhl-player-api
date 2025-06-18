import { Link } from "react-router-dom";
import nhlLogo from "../assets/nhlapilogo.png";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="nav-link">
          <img src={nhlLogo} alt="NHL Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favoriteTeams" className="nav-link">
          Favorite Teams
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
