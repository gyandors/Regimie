import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './ProductItems.css';
import CartContext from '../../Context/CartContext';
import AuthContext from '../../Context/AuthContext';

export default function ProductItems(props) {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  function handleClick() {
    const cartItem = {
      id: props.id,
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
      quantity: 1,
    };

    fetch(`https://crudcrud.com/api/22ee7d8bf5b74aaea357464de281ceb6/cart`, {
      method: 'POST',
      body: JSON.stringify(cartItem),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res);
        if (res.ok) return res.json();
      })
      .then((data) => {
        console.log(data);
        cartCtx.onAddItems(cartItem);
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
