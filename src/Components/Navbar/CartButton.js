import './CartButton.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
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
        <CartIcon />
      </span>
      <span>{totalCartItems}</span>
    </button>
  );
}
