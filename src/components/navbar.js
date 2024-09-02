import Logo from '../assets/Logo.svg'
import "../App.css"

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navigation">
    <nav>
      <ul>
        <li>
          <img src={Logo} alt="logo" className="logo" />
        </li>
        <li>
          <Link to="/">Links</Link>
        </li>
      </ul>
      
      <p className="made-by">
        Made by Sunny Leone ❤️
      </p>
    </nav>
  </header>
  );
};

export default NavBar;
