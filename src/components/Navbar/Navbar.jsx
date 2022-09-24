import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ' '} to="/myAlbum">Mi álbum</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ' '} to="/sheets">Obtener Láminas</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export { Navbar }