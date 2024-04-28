import { useContext } from 'react';
import './ProductItems.css';
import ProductContext from '../Context/ProductContext';

export default function ProductItems(props) {
  const ctx = useContext(ProductContext);

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
    <li className="product-items">
      <img src={props.imageUrl} alt="Products" width={200} />
      <div className="product-desc">
        <h3>{props.title}</h3>
        <b>₹ {props.price}</b>
      </div>
      <button className="add-to-cart" type="button" onClick={handleClick}>
        ADD TO CART
      </button>
    </li>
  );
}
