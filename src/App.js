import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Store from './Pages/Store';
import About from './Pages/About';
import ContactUs from './Pages/ContacUs';
import NotFound from './Pages/ErrorPages/NotFound';
import ProductDetails from './Pages/ProductDetails';
import Auth from './Pages/Auth';

export default function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" exact>
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

        <Route path="/auth">
          <Auth />
        </Route>

        {/* The below Route is for invalid URL */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}
