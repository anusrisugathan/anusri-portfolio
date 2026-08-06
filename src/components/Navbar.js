import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Skills", "/skills"],
    ["Experience", "/experience"],
    ["Projects", "/projects"],
    ["Contact", "/contact"],
  ];

  return (
    <nav className="navbar">
      <NavLink className="logo" to="/">
        <span className="logo-mark">AS</span>
        <span>Anusri Sugathan</span>
      </NavLink>
      <ul>
        {links.map(([label, path]) => (
          <li key={path}>
            <NavLink to={path}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
