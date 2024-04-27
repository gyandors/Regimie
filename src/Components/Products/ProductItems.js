import './ProductItems.css';

export default function ProductItems(props) {
  return (
    <li className="product-items">
      <img src={props.imageUrl} alt="Products" width={200} />
      <div className="product-desc">
        <h3>{props.title}</h3>
        <b>₹ {props.price}</b>
      </div>
      <button className="add-to-cart" type="button">
        ADD TO CART
      </button>
    </li>
  );
}
