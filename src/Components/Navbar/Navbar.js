import './Navbar.css';
import Navigation from './Navigation';
import CartButton from '../Cart/CartButton';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Regimie</h1>
        <p>A Gyandors Brand</p>
      </div>
      <Navigation />
      <CartButton />
    </nav>
  );
}
