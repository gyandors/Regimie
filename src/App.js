import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ProductContextProvider } from './Context/ProductContext';

import Header from './Components/Header/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Store from './Pages/Store';
import About from './Pages/About';
import ContactUs from './Pages/ContacUs';
import NotFound from './Pages/ErrorPages/NotFound';
import ProductDetails from './Pages/ProductDetails';

export default function App() {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/store" exact>
            <Store />
          </Route>

          <Route path="/store/:productId">
            <ProductDetails />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>

          {/* The below Route is for invalid URL */}
          <Route>
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </ProductContextProvider>
  );
}
