import './Products.css';
import { DummyProducts } from '../../Assets/DummyData';
import ProductItems from './ProductItems';

export default function Products() {
  return (
    <section className="products">
      <ul>
        {DummyProducts.map((p) => {
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
