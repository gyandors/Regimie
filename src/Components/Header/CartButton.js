import { useContext } from 'react';
import './CartButton.css';
import CartIcon from '../../Assets/CartIcon.svg';
import CartContext from '../../Context/CartContext';

export default function CartButton(props) {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((prevValue, currValue) => {
    return prevValue + currValue.quantity;
  }, 0);

  return (
    <button
      className="cart-btn"
      type="button"
      onClick={() => {
        props.onShowCart();
        cartCtx.onLoadItems();
      }}
    >
      <img src={CartIcon} alt="Cart Icon" />
      <span>{totalCartItems}</span>
    </button>
  );
}
