import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import Navigation from './Navigation';
import CartButton from './CartButton';
import Cart from '../Cart/Cart';
import AuthContext from '../../Context/AuthContext';

export default function Header() {
  const [showCart, setShowCart] = useState(false);

  const authCtx = useContext(AuthContext);

  const history = useHistory();

  function handleShowCart() {
    setShowCart(!showCart);
  }

  return (
    <header className="header">
      <Link className="navbar-brand" to="/home">
        <h1>Regimie</h1>
        <p>A Gyandors Brand</p>
      </Link>
      <nav>
        <Navigation />
      </nav>
      <div className="login-cart-btn">
        {!authCtx.isLoggedIn && (
          <Link className="login-btn" to="/auth">
            Login
          </Link>
        )}
        {authCtx.isLoggedIn && (
          <button
            className="login-btn"
            onClick={() => {
              authCtx.logout();
              history.replace('/home');
            }}
          >
            Logout
          </button>
        )}
        <CartButton onShowCart={handleShowCart} />
        {showCart && <Cart onShowCart={handleShowCart} />}
      </div>
    </header>
  );
}
