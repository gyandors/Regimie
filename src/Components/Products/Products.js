import './Products.css';
import ProductItems from './ProductItems';

export default function Products() {
  const products = [
    {
      title: 'Colors',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];
  return (
    <section className="products">
      <ul>
        {products.map((p, i) => {
          return (
            <ProductItems
              key={i}
              title={p.title}
              price={p.price}
              imageUrl={p.imageUrl}
            />
          );
        })}
      </ul>
    </section>
  );
}
