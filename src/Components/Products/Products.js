import './Products.css';
import ProductItems from './ProductItems';

export default function Products() {
  const products = [
    {
      id: 'p1',
      title: 'Colors',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      id: 'p2',
      title: 'Black and white Colors',
      price: 50,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      id: 'p3',
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      id: 'p4',
      title: 'Blue Color',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];
  return (
    <section className="products">
      <ul>
        {products.map((p) => {
          return (
            <ProductItems
              key={p.id}
              id={p.id}
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
