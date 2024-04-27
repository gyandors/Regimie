import { useState } from 'react';
import './Navbar.css';
import Navigation from './Navigation';
import CartButton from '../Cart/CartButton';
import Cart from '../Cart/Cart';

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart(!showCart);
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Regimie</h1>
        <p>A Gyandors Brand</p>
      </div>
      <Navigation />
      <CartButton onShowCart={handleShowCart} />
      {showCart && <Cart onShowCart={handleShowCart} />}
    </nav>
  );
}
