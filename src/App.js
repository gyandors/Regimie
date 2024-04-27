import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import { ProductContextProvider } from './Components/Context/ProductContext';

export default function App() {
  return (
    <ProductContextProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <Products />
      </main>
      <footer></footer>
    </ProductContextProvider>
  );
}
