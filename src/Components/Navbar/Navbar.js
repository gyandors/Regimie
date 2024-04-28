import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Navigation from './Navigation';
import CartButton from './CartButton';
import Cart from '../Cart/Cart';

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart(!showCart);
  }

  return (
    <header className="main-header">
      <nav className="navbar">
        <Link className="navbar-brand" to="/">
          <h1>Regimie</h1>
          <p>A Gyandors Brand</p>
        </Link>
        <Navigation />
        <CartButton onShowCart={handleShowCart} />
        {showCart && <Cart onShowCart={handleShowCart} />}
      </nav>
    </header>
  );
}
