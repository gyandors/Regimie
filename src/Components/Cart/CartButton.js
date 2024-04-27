import './CartButton.css';
import CartIcon from './CartIcon';

export default function CartButton() {
  return (
    <button className="cart-btn" type="button">
      <CartIcon /> {0}
    </button>
  );
}
