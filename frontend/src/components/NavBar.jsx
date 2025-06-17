import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="nav-link">
          <h1 className="navbar-title">NHL API</h1>
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
