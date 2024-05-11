import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <ul className="navigation">
      <li>
        <NavLink activeClassName="active" to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/store">
          Store
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/contact">
          Contact Us
        </NavLink>
      </li>
    </ul>
  );
}
