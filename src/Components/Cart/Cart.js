import './Cart.css';
import Modal from '../UI/Modal';
import CartItems from './CartItems';

export default function Cart(props) {
  return (
    <Modal className="cart">
      <div className="cart-header">
        <h3>Cart</h3>
        <button
          className="cart-close-btn"
          type="button"
          onClick={() => props.onShowCart()}
        >
          X
        </button>
      </div>
      <CartItems />
      <footer className="cart-footer">
        <div className="cart-total">
          <h3>Total: </h3>
          <b>₹ {0}</b>
        </div>
        <button className="purchase-btn" type="button">
          Purchase
        </button>
      </footer>
    </Modal>
  );
}
