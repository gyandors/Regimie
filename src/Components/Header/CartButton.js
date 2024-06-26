import { useContext } from 'react';
import './CartButton.css';
import CartIcon from '../../Assets/CartIcon.svg';
import CartContext from '../../Context/CartContext';

export default function CartButton(props) {
  const ctx = useContext(CartContext);

  const totalCartItems = ctx.items.reduce((prevValue, currValue) => {
    return prevValue + currValue.quantity;
  }, 0);

  return (
    <button
      className="cart-btn"
      type="button"
      onClick={() => props.onShowCart()}
    >
      <img src={CartIcon} alt="Cart Icon" />
      <span>{totalCartItems}</span>
    </button>
  );
}
