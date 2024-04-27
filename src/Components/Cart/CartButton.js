import './CartButton.css';
import CartIcon from './CartIcon';

export default function CartButton(props) {
  return (
    <button
      className="cart-btn"
      type="button"
      onClick={() => props.onShowCart()}
    >
      <CartIcon /> {0}
    </button>
  );
}
