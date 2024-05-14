import { useContext } from 'react';
import './CartItems.css';
import CartContext from '../../Context/CartContext';

export default function CartItems() {
  const ctx = useContext(CartContext);

  return (
    <section className="cart-items">
      <table>
        <tbody>
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th></th>
          </tr>
          {ctx.items.map((c, i) => {
            return (
              <tr key={i}>
                <td className="cart-item-title">
                  <img src={c.imageUrl} alt="..." width={80} />
                  <p>{c.title}</p>
                </td>
                <td>₹ {c.price}</td>
                <td>x {c.quantity}</td>
                <td>
                  <button className="cart-item-remove">Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
