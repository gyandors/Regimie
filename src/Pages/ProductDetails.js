import { useParams, Link } from 'react-router-dom';
import { DummyProducts } from '../Assets/DummyProducts';

export default function ProductDetails() {
  const params = useParams();

  const product = DummyProducts.find((p) => p.id === params.productId);

  if (!product)
    return (
      <main>
        <Link to="/store">Back</Link>
        <p>No products found</p>
      </main>
    );

  return (
    <main>
      <div style={{ textAlign: 'center' }}>
        <Link to="/store">Back</Link>
        <h4>Product details:</h4>
        <img src={product.imageUrl} alt="Product copyImage" />
        <p>{product.title}</p>
        <p>{product.price}</p>
        <div>
          <h4>Reviews:</h4>
        </div>
      </div>
    </main>
  );
}
