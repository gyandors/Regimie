import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from './Navigation';
import CartButton from './CartButton';
import Cart from '../Cart/Cart';

export default function Header() {
  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart(!showCart);
  }

  return (
    <header className="header">
      <Link className="navbar-brand" to="/">
        <h1>Regimie</h1>
        <p>A Gyandors Brand</p>
      </Link>
      <nav>
        <Navigation />
      </nav>
      <CartButton onShowCart={handleShowCart} />
      {showCart && <Cart onShowCart={handleShowCart} />}
    </header>
  );
}
