import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <ul className="navigation">
      <li>
        <Link className="nav-link " to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="store">
          Store
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="about">
          About
        </Link>
      </li>
    </ul>
  );
}
