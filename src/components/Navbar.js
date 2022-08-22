import { Link } from "react-router-dom";
import "./style/Navbar.css";

function Navbar() {
  return (
    <nav className="Wrap-Navbar">
      <div className="Title">
        <h2>Rezzyn</h2>
      </div>
      <div className="List-Navbar">
        <ul className="List">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
