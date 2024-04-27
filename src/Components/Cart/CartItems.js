import './CartItems.css';

export default function CartItems() {
  const cartItems = [
    {
      title: 'Colors',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 1,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 1,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ];

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
          {cartItems.map((c, i) => {
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
