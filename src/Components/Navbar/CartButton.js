import { useContext } from 'react';
import './CartButton.css';
import CartIcon from '../../Assets/CartIcon.svg';
import ProductContext from '../Context/ProductContext';

export default function CartButton(props) {
  const ctx = useContext(ProductContext);

  const totalCartItems = ctx.items.reduce((prevValue, currValue) => {
    return prevValue + currValue.quantity;
  }, 0);

  return (
    <button
      className="cart-btn"
      type="button"
      onClick={() => props.onShowCart()}
    >
      <span>
        <img src={CartIcon} alt="Cart Icon" />
      </span>
      <span className="total-cart-items">{totalCartItems}</span>
    </button>
  );
}
