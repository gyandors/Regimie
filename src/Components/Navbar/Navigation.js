import './Navigation.css';

export default function Navigation() {
  return (
    <ul className="navigation">
      <li className="nav-item">
        <a className="nav-link " href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Store
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          About
        </a>
      </li>
    </ul>
  );
}
