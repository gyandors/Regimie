import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './ProductItems.css';
import CartContext from '../../Context/CartContext';

export default function ProductItems(props) {
  const ctx = useContext(CartContext);

  function handleClick() {
    ctx.onAddItems({
      id: props.id,
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
      quantity: 1,
    });
  }

  return (
    <li>
      <Link className="product-items" to={`/store/${props.id}`}>
        <img src={props.imageUrl} alt="Products" width={200} />
        <div className="product-desc">
          <h3>{props.title}</h3>
          <b>₹ {props.price}</b>
        </div>
      </Link>
      <button className="add-to-cart" type="button" onClick={handleClick}>
        ADD TO CART
      </button>
    </li>
  );
}
