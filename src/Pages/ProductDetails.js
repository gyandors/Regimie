import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const params = useParams();
  console.log(params);

  return (
    <main>
      <h2>Product details Page</h2>
      <p>{params.productId}</p>
    </main>
  );
}
