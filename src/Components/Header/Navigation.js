import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <ul className="navigation">
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="store"
        >
          Store
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="contact"
        >
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
}
